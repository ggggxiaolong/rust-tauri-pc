#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::{Manager, State};
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::TcpStream;
use tokio::net::tcp::WriteHalf;
use tokio::sync::mpsc::{self, Receiver, Sender};
use tracing::trace;
use tracing_subscriber::{fmt, layer::SubscriberExt, util::SubscriberInitExt};
struct Connection {
    data_tx: Sender<Vec<u8>>,
    connect_tx: Sender<String>,
}

// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[tauri::command]
async fn send_data(data: String, connection: State<'_, Connection>) -> Result<(), String> {
    trace!("send_data:{}", &data);
    connection
        .data_tx
        .send(data.into_bytes())
        .await
        .map_err(|e| format!("发送失败{:?}", e))?;
    Ok(())
}

#[tauri::command]
async fn connect(addr: String, connection: State<'_, Connection>) -> Result<(), String> {
    trace!("connect addr:{}", &addr);
    connection
        .connect_tx
        .send(addr)
        .await
        .map_err(|e| format!("发送失败{:?}", e))
}

#[tauri::command]
async fn disconnect(connection: State<'_, Connection>) -> Result<(), String> {
    trace!("disconnect");
    connection
        .connect_tx
        .send("".into())
        .await
        .map_err(|e| format!("发送失败{:?}", e))
}

#[tracing::instrument]
fn start_recv(
    log_tx: Sender<String>,
    mut connect_rx: Receiver<String>,
    mut cmd_rx: Receiver<Vec<u8>>,
) {
    tauri::async_runtime::spawn(async move {
        //接受连接断开的指令
        loop {
            tokio::select! {
                cmd = cmd_rx.recv() => {
                    //清除未发送的数据
                    if cmd.is_none() {
                        trace!("停止运行");
                        return;
                    } else {
                        trace!("清除未发送的数据");
                    }
                }
                addr = connect_rx.recv() => {
                    if let Some(addr) = addr {
                        trace!("接受到连接请求: {}", &addr);
                        if addr.is_empty() {
                            trace!("已经停止连接 {}", &addr);
                            let _ = log_tx.send("已经停止连接".into()).await;
                        } else {
                            // 连接服务
                            connect_server(addr, log_tx.clone(), &mut cmd_rx, &mut connect_rx).await;
                        }
                    } else {
                        trace!("停止运行");
                        return;
                    }
                }
            }
        }
    });
}

#[tracing::instrument]
async fn connect_server(
    addr: String,
    log_tx: Sender<String>,
    cmd_rx: &mut Receiver<Vec<u8>>,
    connect_rx: &mut Receiver<String>,
) {
    let rst = TcpStream::connect(&addr).await;
    trace!("发起连接请求: {:?}", &rst);
    match rst {
        Ok(mut stream) => {
            // todo
            let _ = log_tx.send("连接成功".into()).await;
            let (mut reader, mut writer) = stream.split();
            let mut buf = vec![0; 1024];
            loop {
                tokio::select! {
                    val = reader.read(&mut buf) => {
                        // 读取服务器数据
                        // trace!("读取服务器数据: {:?}", &val);
                        if let Ok(len) = val {
                            if len == 0 {
                                // 服务器断开
                                let _ = log_tx.send("服务器断开连接".into()).await;
                                return;
                            } else {
                                let msg = String::from_utf8(buf[..len].to_vec()).unwrap();
                                let _ = log_tx.send(msg).await;
                            }
                        } else {
                            // 服务器读取错误
                            let _ = log_tx.send("服务器读取错误,断开连接".into()).await;
                            return;
                        }
                    }
                    val = cmd_rx.recv() => {
                        trace!("发送数据: {:?}", &val);
                        if let Some(data) = val {
                            write_data(data, &log_tx, &mut writer).await;
                        } else {
                            // 断开连接
                            let _ = log_tx.send("断开连接".into()).await;
                            return;
                        }
                    }
                    addr = connect_rx.recv() => {
                        trace!("接受连接请求: {:?}",addr);
                        if let Some(addr) = addr {
                            // 断开连接
                            if addr.is_empty() {
                                let _ = log_tx.send("断开连接".into()).await;
                                return;
                            } else {
                                let _ = log_tx.send("已经建立了连接,无需重复建立".into()).await;
                            }

                        } else {
                            // 断开连接
                            let _ = log_tx.send("断开连接".into()).await;
                            return;
                        }
                    }
                }
            }
        }
        Err(e) => {
            let _ = log_tx.send(format!("connect error: {:?}", e)).await;
        }
    }
}


#[tracing::instrument]
async fn write_data<'a>(data: Vec<u8>, log_tx: &Sender<String>, writer: &mut WriteHalf<'a>) {
    let ret = writer.write(&data).await;
    match ret {
        Ok(len) => {
            let _ = log_tx.send(format!("发送成功: {len}")).await;
        }
        Err(e) => {
            let _ = log_tx.send(format!("发送失败: {:?}", e)).await;
        }
    }
}

fn main() {
    tracing_subscriber::registry().with(fmt::layer()).init();
    let (log_tx, mut log_rx) = mpsc::channel::<String>(32);
    let (connect_tx, connect_rx) = mpsc::channel::<String>(32);
    let (data_tx, data_rx) = mpsc::channel::<Vec<u8>>(32);
    let connection = Connection {
        data_tx,
        connect_tx,
    };
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.handle();
            tauri::async_runtime::spawn(async move {
                while let Some(msg) = log_rx.recv().await {
                    trace!("{}", &msg);
                    if let Err(e) = handle.emit_all("send-log", msg) {
                        println!("{:?}", e);
                    }
                }
            });
            tauri::async_runtime::spawn(async move { start_recv(log_tx, connect_rx, data_rx) });
            Ok(())
        })
        .manage(connection)
        .menu(tauri::Menu::os_default(&context.package_info().name))
        .invoke_handler(tauri::generate_handler![connect, disconnect, send_data])
        .run(context)
        .expect("error while running tauri application");
}

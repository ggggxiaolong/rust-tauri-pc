use std::io;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};
use  std::time::Duration;

pub const API_ADDRESS: &str = "127.0.0.1:3344";
#[tokio::main]
async fn main() -> io::Result<()> {
    let listener = TcpListener::bind(API_ADDRESS).await?;
    loop {
        // The second item contains the IP and port of the new connection.
        let (socket, _) = listener.accept().await.unwrap();
        tokio::spawn(async move {
            process(socket).await;
        });
    }
}

async fn process(mut socket: TcpStream) {
    let (mut reader, mut writer) = socket.split();
    let mut buf = vec![0; 1024];
    loop {
        tokio::select! {
            val = reader.read(&mut buf) => {
                match val {
                    Ok(0) =>{
                        println!("设备断开连接");
                        return ;
                    }
                    Ok(n) => {
                        println!("receive: {}", String::from_utf8(buf[..n].to_vec()).unwrap());
                    }
                    Err(_) => {
                        println!("设备读取错误,断开连接");
                        return ;
                    }
                }
            }
            _ = tokio::time::sleep(Duration::from_secs(3)) => {
                let msg = random_word::gen();
                let _ = writer.write_all(&msg.to_string().into_bytes()).await;
            }
        }
    }
}

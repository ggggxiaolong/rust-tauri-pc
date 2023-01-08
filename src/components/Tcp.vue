<template>
  <el-container>
    <el-main h="60vh">
      <el-scrollbar max-height="60vh">
        <div v-for="(msg,i) in logs" :key="i">{{msg}}</div>
      </el-scrollbar>
    </el-main>
    <el-footer>
      <el-row :gutter="12">
        <el-col :span="12">
          <el-input v-model="input" placeholder="请输入..."/>
        </el-col>
        <el-col :span="2"
          ><el-button type="primary" @click="send">发送</el-button></el-col
        >
      </el-row>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import { listen, Event } from "@tauri-apps/api/event";

const address = ref("127.0.0.1:3344");
const input = ref("");
const logs: Ref<Array<string>> = ref([]);

function send() {
  const msg = input.value;
  if (msg.length == 0) return;
  invoke<void>("send_data", { data: msg })
    .then(() => {
      console.log("send data ok");
    })
    .catch((e) => console.log(e));
  input.value = "";
}

function clearLog() {
  logs.value = [];
}

onMounted(() => {
  listen("send-log", (msg: Event<string>) => {
    logs.value.push(msg.payload);
  });
  invoke<void>("connect", { addr: address.value })
    .then(() => {
      console.log("send connect ok");
    })
    .catch((e) => console.log(e));
});

onUnmounted(() => {
  invoke<void>("disconnect")
    .then(() => {
      console.log("send disconnect ok");
    })
    .catch((e) => console.log(e));
});
</script>

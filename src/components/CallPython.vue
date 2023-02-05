<template>
  <h1>调用 Python 的方法</h1>
  <div>
    调用返回: {{ callback }}
    <el-button type="primary" @click="send">发送</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
const callback = ref("");
function send() {
  invoke<string>("call_python")
    .then((r: string) => {
      callback.value = r;
      console.log("send data ok");
    })
    .catch((e) => console.log(e));
}
</script>

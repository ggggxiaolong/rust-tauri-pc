import { createApp } from "vue";
// import ElementPlus from 'element-plus'
import Home from "@/App.vue";
import router from "@/router";
import "@/styles/index.scss";
import "uno.css";

const app = createApp(Home);

// app.use(ElementPlus)
app.use(router);
app.mount("#app");

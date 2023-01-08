import { createRouter, createWebHashHistory } from "vue-router";
import { PATH } from "./path";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: import("@/components/chart/Gauge.vue"),
      },
      {
        path: PATH.GAUGE,
        component: import("@/components/chart/Gauge.vue"),
      },
      {
        path: PATH.RADAR,
        component: import("@/components/chart/Radar.vue"),
      },
      {
        path: PATH.THREE,
        component: import("@/components/3d/Three.vue"),
      },
      {
        path: PATH.TCP,
        component: import("@/components/Tcp.vue"),
      },
    ],
  });
  
  export default router;
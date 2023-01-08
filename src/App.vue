<template>
  <el-container class="layout-container">
    <el-aside width="140px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" router>
          <el-menu-item :index="PATH.GAUGE"
            ><el-icon><Odometer /></el-icon>表盘</el-menu-item
          >
          <el-menu-item :index="PATH.RADAR"
            ><el-icon><PieChart /></el-icon>图表</el-menu-item
          >
          <el-menu-item :index="PATH.THREE"
            ><el-icon><CopyDocument /></el-icon>3D</el-menu-item
          >
          <el-menu-item :index="PATH.TCP"
            ><el-icon><Switch /></el-icon>TCP</el-menu-item
          >
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <router-view />
      <div class="float-icon el-backtop">
        <el-button
          v-if="isDark"
          :icon="Sunny"
          text
          circle
          @click="toggleDark()"
        />
        <el-button v-else :icon="Moon" text circle @click="toggleDark()" />
      </div>
      <el-backtop :bottom="32" :right="80" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from "@/composables";
import {
  Odometer,
  Sunny,
  Moon,
  CopyDocument,
  PieChart,
  Switch,
} from "@element-plus/icons-vue";
import { PATH } from "@/router/path";
</script>

<style scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
}
.float-icon {
  bottom: 32px;
  right: 32px;
}
</style>
<style>
a {
  text-decoration: none;
  color: var(--el-menu-text-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--el-text-color-regular);
  font-weight: 600;
}
body {
  font-family: var(--el-font-family);
  /* color: var(--el-text-color-primary);
  background-color: var(--el-bg-color); */
}

.demo {
  border: 1px solid var(--el-border-color);
  padding: 1.5rem;
}
</style>

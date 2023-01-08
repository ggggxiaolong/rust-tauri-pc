<template>
  <h1>表盘</h1>
  <div class="demo">
    <el-space wrap>
      <el-card
        v-for="(initOption, i) in initOptions"
        :key="i"
        class="box-card"
        w="440px"
      >
        <template #header>
          <span>表盘{{ i }}</span>
          <!-- <el-button text>Operation</el-button> -->
        </template>
        <v-chart
          class="chart"
          :option="initOption"
          :theme="darkTheme"
          autoresize
        />
      </el-card>

      <el-card class="box-card" w="900px">
        <template #header>
          <span>表盘11</span>
          <!-- <el-button text>Operation</el-button> -->
        </template>
        <v-chart h="700px" :option="carOptions" autoresize />
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import VChart from "vue-echarts";
import { ref, Ref, computed } from "vue";
import { isDark } from "@/composables";
import { ECBasicOption } from "echarts/types/dist/shared";
import { TitleComponent, TooltipComponent } from "echarts/components";
import {
  basicGaugeData,
  simpleGaugeData,
  speedGaugeData,
  progressGaugeData,
  stageGaugeData,
  gradeGaugeData,
  multiTitleGaugeData,
  temperatureGaugeData,
  ringGaugeData,
  barometerGaugeData,
  clockGaugeData,
  carGaugeData,
} from "@/data";

use([CanvasRenderer, GaugeChart, TooltipComponent, TitleComponent]);

const darkTheme = computed(() => {
  return isDark.value ? "dark" : "";
});

const initOptions: Array<ECBasicOption> = [
  basicGaugeData(50),
  simpleGaugeData(60),
  speedGaugeData(),
  progressGaugeData(),
  stageGaugeData(),
  gradeGaugeData(),
  multiTitleGaugeData(),
  temperatureGaugeData(),
  ringGaugeData(),
  barometerGaugeData(),
  clockGaugeData(),
];
const carOptions: Ref<ECBasicOption> = ref(carGaugeData(90, 150, 2));
</script>

<style scoped lang="scss">
.chart {
  height: 400px;
}
</style>

<template>
  <h1>图表</h1>
  <div class="demo">
    <el-space wrap>
      <el-card
        v-for="(initOption, i) in initOptions"
        :key="i"
        class="box-card"
        w="600px"
      >
        <template #header>
          <span>图表{{ i + 1 }}</span>
          <!-- <el-button text>Operation</el-button> -->
        </template>
        <v-chart
          class="chart"
          :option="initOption"
          :theme="darkTheme"
          autoresize
        />
      </el-card>
    </el-space>
  </div>
</template>
<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  RadarChart,
  LineChart,
  ScatterChart,
  PieChart,
  BarChart,
} from "echarts/charts";
import VChart from "vue-echarts";
import { ref, Ref, computed } from "vue";
import { isDark } from "@/composables";
import { ECBasicOption } from "echarts/types/dist/shared";
import {
  TitleComponent,
  TooltipComponent,
  AxisPointerComponent,
  LegendComponent,
} from "echarts/components";
import {
  radarOption,
  scatterLinearOption,
  mixLineBarOption,
  stepLineOptions,
  gradientStackedAreaOption,
} from "@/data";

use([
  CanvasRenderer,
  RadarChart,
  PieChart,
  ScatterChart,
  LineChart,
  BarChart,
  TooltipComponent,
  TitleComponent,
  AxisPointerComponent,
  LegendComponent,
]);

const darkTheme = computed(() => {
  return isDark.value ? "dark" : "";
});

const initOptions: Array<ECBasicOption> = [
  radarOption(),
  scatterLinearOption(),
  mixLineBarOption(),
  stepLineOptions(),
  gradientStackedAreaOption(),
];
</script>

<style scoped lang="scss">
.chart {
  height: 400px;
}
</style>

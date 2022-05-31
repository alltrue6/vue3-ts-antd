<script setup lang="ts">
import { onMounted } from 'vue';
import { EChartsOption, init } from 'echarts';

onMounted(() => {
  // 获取dom，断言HTMLElement类型，否则会报错
  const chartEle: HTMLElement = document.getElementById('chart') as HTMLElement;
  const chart = init(chartEle);
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  option && chart.setOption(option);
})
</script>

<template>
  <div id="chart"></div>
</template>

<style>
#chart {
  width: 100%;
  height: 100vh;
}
</style>

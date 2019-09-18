<template>
  <div class="charts_box">
    <div id="lineChart" />
  </div>
</template>
<script>
import echarts from 'echarts'
import { lineChartData } from '@/api/user'
let lineChart;
export default {
  name: 'Charts',
  data() {

  },
  mounted() {
    lineChart = echarts.init(document.getElementById("lineChart"));
    initLineChart([], [], []);
  },
  methods: {

  }
};
function initLineChart(xData, yData, yName) {
  const option = {
    title: {
      text: yName + '折线图'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      name: '时间',
      type: 'category',
      boundaryGap: true,
      data: xData,
      axisLine: { symbol: ['none', 'arrow'] }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value) {
          return value / 1000 + 'K';
        },
        textStyle: {
          color: 'teal'
        }
      },
      axisLine: { symbol: ['none', 'arrow'] }
    },
    series: [
      {
        name: yName,
        type: 'line',
        stack: '总量1',
        yAxisIndex: 0,
        smooth: 0.2,
        data: yData,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      }
    ]
  };
  lineChart.setOption(option)
}
</script>
<style lang="scss" scoped>
.charts_box {
  width: 100%;
  height: 100%;
  border: 3px solid teal;
  border-radius: 5px;
}
</style>
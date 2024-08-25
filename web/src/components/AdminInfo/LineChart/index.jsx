import React from 'react';
import ReactECharts from 'echarts-for-react';

const MultiLineChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Company', 'Puser'],
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Company',
        type: 'line',
        data: [100, 200, 150, 300, 250, 180],
        lineStyle: {
          color: 'pink', // 设置粉色
        },
      },
      {
        name: 'Puser',
        type: 'line',
        data: [80, 150, 120, 220, 180, 210],
        lineStyle: {
          color: 'green', // 设置绿色
        },
      }
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%',width:'100%' }} />;
};

export default MultiLineChart;
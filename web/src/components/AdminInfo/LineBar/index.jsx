/*
 * @Author: diana
 * @Date: 2023-06-05 01:14:00
 * @LastEditTime: 2023-06-05 01:14:05
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

function LineBarChart() {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Line', 'Bar'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Value',
      },
    ],
    series: [
      {
        name: 'Line',
        type: 'line',
        data: [10, 20, 15, 25, 30],
      },
      {
        name: 'Bar',
        type: 'bar',
        data: [5, 15, 10, 20, 25],
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px' }} />;
}

export default LineBarChart;
import React from 'react';
import ReactECharts from 'echarts-for-react';

const DonutChart = () => {
  const myColor1 = '#0088ff';
  const myColor2 = '#00cfff';

  const option = {
    title: {
      text: [],
      textStyle: {
        color: myColor1,
        fontSize: 18
      },
      subtext: [],
      subtextStyle: {
        color: '#000000',
        fontSize: 10
      },
      itemGap: 36, // 主副标题距离
      left: 'center',
      top: 'center'
    },
    angleAxis: {
      max: 100, // 满分
      clockwise: true, // 逆时针
      // 隐藏刻度线
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    radiusAxis: {
      type: 'category',
      // 隐藏刻度线
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {
      center: ['50%', '50%'],
      radius: '90%' // 图形大小
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            name: '占有率',
            value: 40, // 填入百分比数值
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0.7)'
              }
            }
          }
        ],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 10,
        barGap: '-100%', // 两环重叠
        z: 2
      },
      {
        // 灰色环
        type: 'bar',
        data: [
          {
            value: 100,
            itemStyle: {
              color: '#e0e0e0',
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 5,
              shadowOffsetY: 2
            }
          }
        ],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 10,
        barGap: '-100%', // 两环重叠
        z: 1
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default DonutChart;
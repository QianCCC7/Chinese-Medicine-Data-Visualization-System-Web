<template>
  <div>
    <!-- 1. 设置渲染图表的位置，注意需要给宽度和高度，否则图表不展示 -->
    <div ref="myEcharts" style="width: 800px; height: 800px; border: 1px solid black"></div>
  </div>
</template>

<script>
// 2. 引入 echarts库
import * as echarts from "echarts"

export default {
  name: "Main",
  data() {
    return {
      map: [ // 创建关系图的节点数据
        {
          name: '老大',
          symbolSize: 120,
          draggable: true,// 节点移动效果
          category: '分类1',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 6,
              shadowBlur: 20,
              // shadowColor: 'pink',
              // color: 'pink',
            }
          },
        },
        {
          name: '老二',
          symbolSize: 100,
          category: '分类2',
          itemStyle: {
            normal: {
              // borderColor: '#04f2a7',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43',
            }
          },
        }, {
          name: '老三',
          symbolSize: 80,
          category: '分类3',
          itemStyle: {
            normal: {
              // borderColor: '#04f2a7',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43',
            }
          },
        }, {
          name: '小蓝',
          symbolSize: 80,
          category: '分类1',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43',
            }
          },
        }, {
          name: '小红',
          symbolSize: 80,
          category: '分类2',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43',
            }
          },
        }, {
          name: '小绿',
          symbolSize: 100,
          category: '分类2',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43',
            }
          },
        }, {
          name: '小青',
          symbolSize: 80,
          category: '分类1',
          itemStyle: {
            normal: {
              // borderColor: '#b457ff',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#b457ff',
              // color: '#001c43'
            }
          },
        }, {
          name: '小紫',
          symbolSize: 80,
          category: '分类1',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43'
            }
          },
        }, {
          name: '小黑',
          symbolSize: 80,
          category: '分类2',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43'
            }
          },
        }, {
          name: '小白',
          symbolSize: 80,
          category: '分类2',
          itemStyle: {
            normal: {
              // borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              // shadowColor: '#04f2a7',
              // color: '#001c43'
            }
          },
        },
      ],
      relations: [ // 创建关系图的关系数据
        {
          source: '老大',
          target: '老三',
          value: 'DNA'
        }, {
          source: '老大',
          target: '小蓝',
          value: 'DNA'
        }, {
          source: '老大',
          target: '小青',
          value: 'DNA'
        }, {
          source: '老大',
          target: '小紫',
          value: 'DNA'
        }, {
          source: '老二',
          target: '小黑',
          value: 'DNA'
        }, {
          source: '老二',
          target: '小白',
          value: 'DNA'
        }, {
          source: '老二',
          target: '小绿',
          value: 'DNA'
        }, {
          source: '老二',
          target: '小红',
          value: 'DNA',
        }, {
          source: '老三',
          target: '老二',
          value: 'DNA'
        }
      ]
    }
  },
  mounted() {
    // 3. 初始化图表
    let myEcharts = echarts.init(this.$refs.myEcharts)
    let option = {
      backgroundColor: '#1a4377',
      tooltip: {}, // 数据提示
      series: [{
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 1000, // 点与点之间点距离
          edgeLength: 100 // 边的长度
        },
        roam: true, // 允许拖动图表移动
        // 文字样式
        label: {
          normal: { // 正常样式
            show: true, // 是否直接展示文字样式
            color: "white"
          },
          emphasis: { // 高亮样式
            // color: "black"
          }
        },
        data: this.map,
        links: this.relations,
        categories: [{
          name: '分类1'
        }, {
          name: '分类2'
        }, {
          name: '分类3'
        }],
        // 设置边的样式
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 5,
            curveness: 0
          }
        },
        edgeLabel: { // 渲染边数据
          show: true,
          position: "middle",
          formatter: (params) => {
            return params.data.value
          }
        },
      }],
      legend: {
        x: 'right',
        data: ['分类1', '分类2', '分类3'], // 关系图中，对应的图例名称要和 series中 categories的 name属性保持一致
        textStyle: {
          color: "white",
          fontSize: "16px"
        },
        orient: "vertical"
      },
      color: ['#3979d2', '#b457ff', '#82dffe'], // 如果 series没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色
    }
    myEcharts.setOption(option)
  }
}
</script>

<style scoped>

</style>
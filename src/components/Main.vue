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
          category: 0,
          itemStyle: {
            normal: {
              borderColor: 'rgb(213,143,154)',
              borderWidth: 6,
              shadowBlur: 20,
              shadowColor: 'pink',
              color: 'pink',
            }
          },
        },
        {
          name: '老二',
          symbolSize: 100,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '老三',
          symbolSize: 80,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '小蓝',
          symbolSize: 80,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '小红',
          symbolSize: 80,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '小绿',
          symbolSize: 100,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '小青',
          symbolSize: 80,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: '#b457ff',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b457ff',
              color: '#001c43'
            }
          },
        }, {
          name: '小紫',
          symbolSize: 80,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43'
            }
          },
          category: 2,
        }, {
          name: '小黑',
          symbolSize: 80,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43'
            }
          },
          category: 2,
        }, {
          name: '小白',
          symbolSize: 80,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#001c43'
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
          repulsion: 1000, // 点和点间点距离
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
            color: "red"
          }
        },
        data: this.map,
        links: this.relations,
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
      }]
    }
    myEcharts.setOption(option)
  }
}
</script>

<style scoped>

</style>
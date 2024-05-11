<template>
  <div>
    <!-- 1. 设置渲染图表的位置，注意需要给宽度和高度，否则图表不展示 -->
    <div ref="myEcharts" style="width:1500px; height: 800px; border: 1px solid black"></div>
  </div>
</template>

<script>
// 2. 引入 echarts库
import * as echarts from "echarts"
import {test} from "@/api/test-request";

export default {
  name: "Main",
  data() {
    return {
      nodes: [],
      relations: [],
      categories: [],
    }
  },
  methods: {
    initEcharts() {
      // 3. 初始化图表
      let myEcharts = echarts.init(this.$refs.myEcharts)
      let option = {
        backgroundColor: '#1a4377',
        tooltip: {}, // 数据提示
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            // 调整斥力
            repulsion: 575,
            // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            gravity: 0.20,
            // 调整节点之间的连线长度
            edgeLength: 300,
            layoutAnimation : true,
          },
          draggable: true,// 节点移动效果
          roam: true, // 允许拖动图表移动
          // 文字样式
          label: {
            normal: { // 正常样式
              show: true, // 是否直接展示文字样式
              color: "white"
            },
          },
          // 控制节点尽量在画布内展示
          data: this.nodes.map(node => ({
            ...node,
            x: Math.random() * 1200,
            y: Math.random() * 600,
          })),
          links: this.relations,
          categories: this.categories,
          // 设置边的样式
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 5,
              curveness: 0.1, // 线条弧度
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 6,
              shadowBlur: 20,
            }
          },
          emphasis: {
            focus: 'adjacency', // 节点被高亮时，与该节点相邻的其他节点也会被强调显示
            lineStyle: {
              normal: {
                width: 20 // 高亮时连线的宽度为10个像素
              }
            },
            scale: 1.2 // 高亮时被选中节点的缩放比例
          },
          edgeLabel: { // 渲染边数据
            show: true,
            position: "middle",
            formatter: (params) => {
              return params.data.value
            }
          },
          edgeSymbol: ['circle', 'arrow'],// 边两端的标记类型
        }],
        legend: {
          x: 'right',
          data: this.categories, // 关系图中，对应的图例名称要和 series中 categories的 name属性保持一致
          textStyle: {
            color: "white",
            fontSize: "16px"
          },
          orient: "vertical"
        },
        // color: ['#3979d2', '#b457ff', '#82dffe'], // 如果 series没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色
      }

      myEcharts.setOption(option)
      // 节点自定义拖拽不回弹
      myEcharts.on('mouseup', function (params) {
        let op = myEcharts.getOption();
        op.series[0].data[params.dataIndex].x = params.event.offsetX;
        op.series[0].data[params.dataIndex].y = params.event.offsetY;
        op.series[0].data[params.dataIndex].fixed = true;
        myEcharts.setOption(op);
      });
    },
  },
  mounted() {
    test().then((response) => {
      for (let n of response.data.nodes) {
        this.nodes.push(n)
      }
      for (let r of response.data.relations) {
        this.relations.push(r)
      }
      for (let c of response.data.categories) {
        this.categories.push(c)
      }
      this.initEcharts();
    })
  }
}
</script>

<style scoped>

</style>
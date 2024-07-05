<template>
  <div class="menu-wrapper">
    <div class="menu" @click="showRouterView('prescription')">
      <div class="menu-box selected-menu-box" @click="changeBoxStyle($event)">
        中医方剂
      </div>
    </div>
    <div class="menu" @click="showRouterView('medicine-herbs')">
      <div class="menu-box" @click="changeBoxStyle($event)">
        中医药材
      </div>
    </div>
    <div class="menu" @click="showRouterView('knowledge-graph')">
      <div class="menu-box" @click="changeBoxStyle($event)">
        知识图谱
      </div>
    </div>
    <div class="menu" @click="showRouterView('data-screen')">
      <div class="menu-box" @click="changeBoxStyle($event)">
        数据大屏
      </div>
    </div>
  </div>

</template>

<script>
import {Menu} from "@element-plus/icons-vue";

export default {
  name: "LeftSide",
  components: {Menu},
  data() {
    return {
      isCollapse: true,
    }
  },
  methods: {
    // 根据 routerPath显示指定 main组件内容
    showRouterView(routerPath) {
      this.$router.push({path: routerPath})
    },
    // 鼠标点击菜单栏时，固定对应菜单栏的样式
    changeBoxStyle(event) {
      // 清除已设置 selected-menu-box的盒子样式
      document.getElementsByClassName("selected-menu-box")[0].className = 'menu-box'
      // 设置当前盒子为 selected-menu-box样式
      event.currentTarget.className = 'selected-menu-box'
    },
  }
}
</script>

<style scoped>
/* 左边菜单栏盒子 */
.menu-wrapper {
  width: 200px;
  background-color: rgb(17, 76, 245);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 菜单样式 */
  .menu {
    text-align: center;
    height: 65px;
    line-height: 65px;
    color: white;
    position: relative;
  }
  .menu:hover {
    cursor: pointer;
    .menu-box {
      color: rgb(17, 76, 245);
      position: absolute;
      right: 0;
      top: 0;
      width: 180px;
      background-color: rgb(240,245,249); /* 设置你想要的背景颜色 */
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
    }
  }
}
/* 菜单栏被选中时样式 */
.selected-menu-box {
  color: rgb(17, 76, 245);
  position: absolute;
  right: 0;
  top: 0;
  width: 180px;
  background-color: rgb(240,245,249); /* 设置你想要的背景颜色 */
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
}
</style>
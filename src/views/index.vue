<template>
  <div id="container">
    <Header id="header"></Header>
    <div id="content">
      <LeftSide id="left-side"></LeftSide>
      <Main id="main"></Main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftSide from "@/components/LeftSide.vue";
import Main from "@/components/Main.vue";
export default {
  name: "index",
  components: {
    Header,
    LeftSide,
    Main,
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  background-color: rgb(240,245,249);
  display: flex;
  flex-direction: column;
}
#header {
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
}
#content {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: row;
}
#left-side {
  width: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
}
#main {
  width: calc(100% - 200px);
  /* 实现当main组件数据过多时，滚轮仅出现在main组件内，而不是container */
  overflow-y: auto;
}
</style>

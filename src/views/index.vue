<template>
  <div id="container">
    <Header id="header"></Header>
    <LeftSide id="left-side"></LeftSide>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftSide from "@/components/LeftSide.vue";
export default {
  name: "index",
  components: {
    Header,
    LeftSide,
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  background-color: rgb(240,245,249);
}
#header {
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
}
#left-side {
  width: 200px;
  /* 高度为: container.height - height.height */
  height: calc(100% - 50px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
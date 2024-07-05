<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
#main {
  width: calc(100% - 200px);
  /* 实现当main组件数据过多时，滚轮仅出现在main组件内，而不是container */
  overflow-y: auto;
  background-color: rgb(240,245,249);
}
</style>
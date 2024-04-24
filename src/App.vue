<template>
  <!--  通过 router下的 index.js默认渲染 views下的 index.vue -->
  <!--  也就是让 index.vue为默认首页 -->
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
</style>

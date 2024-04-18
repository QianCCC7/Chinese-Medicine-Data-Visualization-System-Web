<template>
  <div id="container">
    <p>这是 index.vue</p>
    <router-link to="/header">我要去header</router-link>&nbsp;
    <router-link to="/ls">我要去left-side</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>

<style scoped>
#container {
  height: 100%;
  background-color: rgb(240,245,249);
}
</style>
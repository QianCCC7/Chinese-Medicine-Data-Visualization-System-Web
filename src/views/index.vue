<template>
  <div>
    这是 index.vue
  </div>
  <router-link to="/header">我要去header</router-link>&nbsp;
  <router-link to="/ls">我要去ls</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "index",
}
</script>

<style scoped>

</style>
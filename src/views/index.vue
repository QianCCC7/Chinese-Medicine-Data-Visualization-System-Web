<template>
  <div id="container">
    <Header></Header>
    <div id="content">
      <LeftSide></LeftSide>
      <Main></Main>
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
  display: flex;
  flex-direction: column;
}

#content {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: row;
}

</style>

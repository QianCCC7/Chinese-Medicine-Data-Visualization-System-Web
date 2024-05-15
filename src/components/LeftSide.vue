<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <Document/>
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <div class="test" @click="showRouterView('prescription')">
      中医方剂
    </div>
    <div class="test" @click="showRouterView('medicine-herbs')">
      中医药材
    </div>
  </div>

</template>

<script>
import {
  Document,
  Location,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

export default {
  name: "LeftSide",
  components: {
    Document,
    Location,
    Setting,
    IconMenu
  },
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
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.test {
  text-align: center;
  line-height: 50px;
  height: 50px;
  background-color: deepskyblue;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
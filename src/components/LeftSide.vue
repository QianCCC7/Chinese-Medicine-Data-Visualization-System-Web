<template>
  <div class="menu-wrapper" >
    <div class="menu" v-for="(item, index) in menuData" :key="index">
      <div @click="showRouterView(item.componentPath)" >
        <div class="menu-box" @click="changeBoxStyle($event)" :class="isSelected(item) ? 'selected-menu-box' : ''">
          <span class="menu-box-icon" :style="{'--menuIcon': `${item.menuIcon}`}"></span>
          <div class="menu-box-name">
            {{ item.menuName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Menu} from "@element-plus/icons-vue";
import {getAllMenus} from "@/api/menu";
export default {
  name: "LeftSide",
  components: {Menu},
  data() {
    return {
      menuData: {}, // 所有的菜单数据
    }
  },
  methods: {
    // 判断菜单栏是否被选中
    isSelected(item) {
      return item.componentPath === this.$route.path || this.$route.path.startsWith(item.componentPath);
    },
    // 根据 routerPath显示指定 main组件内容
    showRouterView(routerPath) {
      this.$router.push({path: routerPath})
    },
    // 鼠标点击菜单栏时，固定对应菜单栏的样式
    changeBoxStyle(event) {
      // 清除 selected-menu-box样式，并为当前盒子设置
      document.getElementsByClassName("selected-menu-box")[0].className = 'menu-box'
      event.currentTarget.className = 'selected-menu-box'
    },
  },
  mounted() {
    // 初始化所有菜单
    getAllMenus().then((response) => {
      this.menuData = response.data.data;
      // 初始化渲染第一个菜单数据并且高亮菜单
      this.$nextTick(() => {
        document.getElementsByClassName("menu-box")[0].className = 'selected-menu-box'
        this.$router.push({path: this.menuData[0].componentPath})
      });
    }).catch((error) => {
      console.log(error)
    })
  },
}
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  src: url('@/assets/fonts/iconfont.woff2?t=1720354832939') format('woff2'),
  url('@/assets/fonts/iconfont.woff?t=1720354832939') format('woff'),
  url('@/assets/fonts/iconfont.ttf?t=1720354832939') format('truetype');
}
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
    &:hover {
      cursor: pointer;
      .menu-box {
        color: rgb(17, 76, 245);
        position: absolute;
        right: 0;
        top: 0;
        width: 180px;
        background-color: rgb(240, 245, 249);
        border-top-left-radius: 60px;
        border-bottom-left-radius: 60px;
        transition: all 0.6s linear;
      }
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
  background-color: rgb(240, 245, 249);
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
}

/* 菜单栏前面小图标 */
.menu-box-icon {
  position: relative;
  &::before{
    font-family: 'iconfont';
    content: var(--menuIcon);
    font-size: 24px;
    position: absolute;
    left: -73px;
    top: 0;
  }
}

</style>
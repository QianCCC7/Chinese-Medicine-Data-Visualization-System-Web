<template>
  <div id="header">
    <h3>
      中医药数据可视化平台
    </h3>
    <div class="user_wrapper" @click="showLogout()" tabindex="0" @blur="hiddenLogout()">
      <div class="user_info">
        <img :src="obtainLoginUserAvatar" alt="用户头像" class="user_avatar">
        <p>{{ obtainLoginUsername }}</p>
      </div>
      <div class="user_logout" ref="user_logout">
        <ul class="user_logout_ul">
          <li class="user_logout_ul_li" v-if="calcUserLoginStatus">
            个人信息
          </li>
          <li class="user_logout_ul_li" @click="logout" v-if="calcUserLoginStatus">
            退出登录
          </li>
          <li class="user_logout_ul_li" v-else @click="goToLoginOrRegister">
            去登录/注册
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {ElMessage, ElMessageBox} from "element-plus";
import {logout} from "@/api/login";

export default {
  name: "Header",
  data() {
    return {
      loginUserInfo: {},
      defaultUserAvatar: require('@/assets/user_avatar/default_user_avatar.svg'), // 用户默认头像
      defaultUsername: '用户未登录',
      displayUserLogout: false, // 是否展示退出登录窗口
    }
  },
  computed: {
    // 获取用户头像
    obtainLoginUserAvatar() {
      return this.$store.state.userInfo.avatar != null ? this.$store.state.userInfo.avatar : this.defaultUserAvatar
    },
    // 获取用户名
    obtainLoginUsername() {
      return this.$store.state.userInfo.username != null ? this.$store.state.userInfo.username : this.defaultUsername
    },
    // 获取用户状态
    calcUserLoginStatus() {
      return Object.keys(this.$store.state.userInfo).length !== 0
    }
  },
  methods: {
    // 动态展示注销窗口
    showLogout() {
      this.displayUserLogout = !this.displayUserLogout
      if (this.$refs.user_logout) {
        this.$refs.user_logout.style.display = this.displayUserLogout ? 'block' : 'none'
      }
    },
    hiddenLogout() {
      this.displayUserLogout = false;
      if (this.$refs.user_logout) {
        this.$refs.user_logout.style.display = 'none'
      }
    },
    // 用户退出登录
    logout() {
      ElMessageBox.confirm('你确定要退出登录吗?').then(() => {
        logout().then(() => {
          this.$store.commit('removeUserStatus')  // 移除 token以及登录用户信息
          ElMessage({
            message: '已退出登录!',
            type: 'success',
          })
          this.hiddenLogout()
        }).catch((error) => {
          console.log(error.message)
        })
      }).catch((error) => {
        console.log(error.message)
      })
    },
    // 跳转至登录注册页面
    goToLoginOrRegister() {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
#header {
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  position: relative;
  .user_wrapper {
    width: 200px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 130px;
    .user_info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      background-color: rgb(241,245,249);
      color: black;
      .user_avatar {
        width: 40px;
        height: 40px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .user_logout {
      display: none;
      overflow: hidden; /* 防止不出现 border-radius的问题 */
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      .user_logout_ul_li {
        list-style: none;
        width: 200px;
        height: 50px;
        background-color: rgb(17, 76, 245);
        color: #c2c2c2;
        &:hover {
          background-color: rgb(0, 55, 208);
          color: white;
          cursor: pointer;
        }
      }
    }
  }

}

</style>
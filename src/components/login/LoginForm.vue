<template>
  <ElForm class="login_form">
    <h1>登录</h1>
    <el-form-item>
      <el-input placeholder="输入手机号" :prefix-icon="User" v-model="loginUserInfo.username" :size="'large'"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="输入密码" :prefix-icon="Lock" v-model="loginUserInfo.password" :size="'large'" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login_btn" :size="'large'" @click="login">立即登录</el-button>
    </el-form-item>
  </ElForm>
</template>

<script>
import {Lock, User} from "@element-plus/icons-vue";
import {login} from "@/api/login";

export default {
  name: "LoginForm",
  computed: {
    Lock() { return Lock },
    User() { return User }
  },
  data() {
    return {
      loginUserInfo: {}
    }
  },
  methods: {
    login() {
      login(this.loginUserInfo).then((response) => {
        let data = response.data.data
        let token = data.token
        let userInfo = data.loginUserInfo
        this.$store.commit('setUserStatus', {token, userInfo}) // 存入 token以及登录用户信息
        this.$router.push({path: "/"})
      }).catch((error) => {
        console.log("登录失败", error.message)
      })
    }
  }
}
</script>

<style scoped>
.login_form {
  grid-row: 1;
  grid-column: 1;
  opacity: 1;
  transition: 1.8s ease-in-out;
  /* 上下 左右 */
  h1 {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px dotted cornflowerblue;
  }
  .login_btn {
    width: 100%;
  }
  z-index: 1;
}
.login_form.moveRight {
  opacity: 0;
  transition: 1.8s ease-in-out;
  z-index: 0;
}
</style>
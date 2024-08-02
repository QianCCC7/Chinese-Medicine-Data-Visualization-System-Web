<template>
  <div :class="{login_wrapper: true, 'moveRight': moveRight}">
    <div class="inner_left_wrapper">
      <div class="to_register_btn">
        <ElButton type="primary" @click="handleMove()">去注册</ElButton>
      </div>
      <img src="@/assets/login/login.svg" alt="注册" class="to_register_image">
    </div>
    <div class="inner_right_wrapper">
      <div class="to_login_btn">
        <ElButton type="primary" @click="handleMove()">去登录</ElButton>
      </div>
      <img src="@/assets/login/register.svg" alt="注册" class="to_login_image">
    </div>
    <div class="inner_sign_up_wrapper">
      <div class="inner_sign_up_wrapper_border">
        <RegisterForm :class="{'moveRight': moveRight}"></RegisterForm>
        <LoginForm :class="{'moveRight': moveRight}"></LoginForm>
      </div>
    </div>
  </div>
</template>

<script >
import {ref} from "vue";
import LoginForm from "@/components/login/LoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";
export default {
  name: "Login",
  components: {RegisterForm, LoginForm},
  data() {
    return {
      moveRight: ref(false)
    }
  },
  methods: {
    // 向右移动，转至注册页面
    handleMove() {
      this.moveRight = !this.moveRight
    }
  }
}
</script>

<style scoped>
.login_wrapper {
  /* 宽高占满视图 */
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  /* 四分之一圆样式默认左侧 */
  &::before {
    content: '';
    background-color: rgb(160, 210, 35);
    height: 2000px;
    width: 2000px;
    position: absolute;
    top: -20%;
    right: 48%;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: 1.8s ease-in-out;
    z-index: 2;
  }

  /* 显示去登录按钮以及背景图 */
  .inner_left_wrapper {
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    padding: 3rem 10% 2rem 10%;
    .to_register_image {
      width: 100%;
    }
    .to_register_btn, .to_register_image {
      transform: translateX(0px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: all;
  }

  /* 隐藏去注册按钮以及背景图 */
  .inner_right_wrapper {
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 3rem 10% 2rem 10%;
    .to_login_image {
      width: 100%;
    }
    .to_login_btn, .to_login_image {
      transform: translateX(1000px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: none;
  }

  /* 登录注册表单(默认在右侧，展示登录表单) */
  .inner_sign_up_wrapper {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 20%;
    transition: 1.8s ease-in-out;
    /* 网格布局，登录与注册表单放在同一个网格单元格中 */
    .inner_sign_up_wrapper_border {
      display: grid;
      grid-template-columns: 1fr;
      border: 1px solid #c4c4c4;
      max-width: 450px;
      max-height: 230px;
      margin: auto;
      padding: 1% 1%;
      transition: 1.8s ease-in-out;
    }
  }
}
.login_wrapper.moveRight { /* 当同时拥有这两个 class时才具有下面的 css样式 */
  /* 四分之一圆移至右侧 */
  &::before {
    transform: translate(100%, -50%);
    transition: 1.8s ease-in-out;
    right: 52%;
  }
  /* 隐藏去注册按钮以及背景图 */
  .inner_right_wrapper {
    .to_login_btn, .to_login_image {
      transform: translateX(0px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: all;
  }
  /* 显示去登录按钮以及背景图 */
  .inner_left_wrapper {
    .to_register_btn, .to_register_image {
      transform: translateX(-1000px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: none;
  }
  /* 表单向左移(展示注册表单) */
  .inner_sign_up_wrapper {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 50%;
    top: 20%;
    transition: 1.8s ease-in-out;
    .inner_sign_up_wrapper_border {
      transition: 1.8s ease-in-out;
      max-height: 510px;
    }
  }
}

</style>
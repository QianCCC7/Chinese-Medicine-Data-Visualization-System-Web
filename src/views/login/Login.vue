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
      <LoginForm :class="{'moveRight': moveRight}"></LoginForm>
      <RegisterForm :class="{'moveRight': moveRight}"></RegisterForm>
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

  &::before {
    content: '';
    background-color: rgb(160, 210, 35);
    height: 2000px;
    width: 2000px;
    position: absolute;
    border-radius: 50%;
    transform: translateY(-50%);
    top: -20%;
    right: 48%;
    transition: 1.8s ease-in-out;
    z-index: 2;
  }

  /* 登录 */
  .inner_left_wrapper {
    width: 0;
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

  /* 注册 */
  .inner_right_wrapper {
    width: 0;
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

  /* 登录注册表单 */
  .inner_sign_up_wrapper {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 20%;
    transition: 1.8s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
  }
}
.login_wrapper.moveRight {
  &::before {
    transform: translate(100%, -50%);
    transition: 1.8s ease-in-out;
    right: 52%;
  }
  .inner_right_wrapper {
    .to_login_btn, .to_login_image {
      transform: translateX(0px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: all;
  }

  .inner_left_wrapper {
    .to_register_btn, .to_register_image {
      transform: translateX(-1000px);
      transition: 1.8s ease-in-out;
    }
    pointer-events: none;
  }

  .inner_sign_up_wrapper {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 50%;
    top: 20%;
    transition: 1.8s ease-in-out;
  }
}

</style>
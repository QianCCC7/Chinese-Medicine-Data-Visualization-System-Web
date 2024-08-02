<template>
  <ElForm class="register_form">
    <h1>注册</h1>
    <el-upload
        class="upload-avatar"
        drag
        multiple
        :before-upload="beforeAvatarUpload"
        :http-request="handleUploadAvatar"
        :on-success="handleAvatarSuccess"
    >
      <div class="el-upload__text">
        <em>上传头像</em>
      </div>
    </el-upload>
    <el-form-item>
      <el-input placeholder="输入用户名" :prefix-icon="User" v-model="registerUserInfo.username" :size="'large'">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="输入密码" :prefix-icon="Lock" v-model="registerUserInfo.password" :size="'large'" show-password>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="确认密码" :prefix-icon="Lock" v-model="registerUserInfo.rePassword" :size="'large'" show-password>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="输入手机号" :prefix-icon="Iphone" v-model="registerUserInfo.phoneNUm" :size="'large'">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="输入邮箱" :prefix-icon="Message" v-model="registerUserInfo.email" :size="'large'">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="register_btn" :size="'large'">立即注册</el-button>
    </el-form-item>
  </ElForm>
</template>

<script>
import {User, Lock, Message, Iphone, Plus, UploadFilled} from "@element-plus/icons-vue";

export default {
  name: "RegisterForm",
  components: {UploadFilled, Plus},
  computed: {
    Iphone() {
      return Iphone
    },
    Message() {
      return Message
    },
    Lock() {
      return Lock
    },
    User() {
      return User
    }
  },
  data() {
    return {
      registerUserInfo: {}
    }
  },
  methods: {
    beforeAvatarUpload() {
      console.log(1)
    },
    handleUploadAvatar() {
      console.log(2)
    },
    handleAvatarSuccess() {
      console.log(3)
      return true
    }
  }
}
</script>

<style scoped>
.register_form {
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  transition: 1.8s ease-in-out;
  /* 上下 左右 */
  h1 {
    text-align: center;
    margin-bottom: 10px;
    border-bottom: 1px dotted cornflowerblue;
  }
  .register_btn {
    width: 100%;
  }
  z-index: 0;
}
.register_form.moveRight {
  opacity: 1;
  transition: 1.8s ease-in-out;
  z-index: 1;
}

</style>

<style>
.el-upload-dragger, .upload-avatar {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: auto auto 20px;
}
</style>
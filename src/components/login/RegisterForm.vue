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
        :show-file-list="false"
        :limit="1"
        :on-exceed="handleExceed"
    >
      <div v-if="registerUserInfo.avatar" ref="avatar"></div>
      <div v-else class="el-upload__text">
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
import {ElMessage} from "element-plus";
import {uploadAvatar} from "@/api/login";

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
    // 校验上传文件数量
    handleExceed() {
      ElMessage.error('最多只能上传一张图片!');
    },
    // 上传文件前的校验操作，比如文件大小、文件格式等
    beforeAvatarUpload(imgFile) {
      const checkFileType = imgFile.type === 'image/jpg' || imgFile.type === 'image/jpeg' || imgFile.type === 'image/png';
      const checkFileSize = imgFile.size / 1024 / 1024 <= 1;
      if (!checkFileType) {
        ElMessage.error('上传头像图片只能是 JPG/JPEG/PNG 格式!');
      }
      if (!checkFileSize) {
        ElMessage.error('上传头像图片大小不能超过 1MB!');
      }
      return true;
    },
    // 向后端发起请求，处理上传图片，并更新用户头像
    handleUploadAvatar(param) {
      uploadAvatar(param.file).then((res) => {
        if (res.status === 200) {
          param.onSuccess(res) // 将服务端返回的数据传递给文件上传成功的函数
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 上传头像成功，更新用户头像
    handleAvatarSuccess(res) {
      if (res.data.code === 200) {
        this.registerUserInfo.avatar = res.data.data
        this.$nextTick(() => {
          this.$refs.avatar.style.backgroundImage = `url(${this.registerUserInfo.avatar})`;
          this.$refs.avatar.style.width = '100px'
          this.$refs.avatar.style.height = '100px'
          this.$refs.avatar.style.borderRadius = '50%'
          this.$refs.avatar.style.backgroundSize = '100%'
          this.$refs.avatar.style.transform = 'translate(-10px, -40px)';
        })
      }
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
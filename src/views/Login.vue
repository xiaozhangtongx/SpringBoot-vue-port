<template>
  <div class="login-box">
    <el-card class="box-card">

      <h1>Login Form</h1>

      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginFormRules">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username" autofocus="true"
            placeholder="请输入您的账号">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"
            placeholder="请输入您的密码" show-password autofocus="true"
            @keyup.native.enter="login('loginFormRef')">
          </el-input>
        </el-form-item>

        <el-button type="text">没有账号</el-button>

        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login('loginFormRef')">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
let time = null
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      // 表单验证
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    login() {
      clearTimeout(time)
      time = setTimeout(() => {
        this.$refs.loginFormRef.validate((valid) => {
          if (!valid) {
            return this.$message({
              showClose: true,
              message: '登录失败，请检查您输入的账号或密码是否正确',
              type: 'error',
            })
          } else {
            this.$router.push('/home') // 页面跳转
            return this.$message({
              message: '登录成功',
              type: 'success',
              showClose: true,
            })
          }
        })
      }, 500)
    },
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
  },
}
</script>

<style scoped lang="scss">
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3a4b;

  .box-card {
    width: 420px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    border: none;
    h1 {
      text-align: center;
      margin: 20px;
    }
    .login_form {
      padding: 0px 40px;
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }

  ::v-deep .el-card__body {
    padding: 0px;
  }
}
</style>

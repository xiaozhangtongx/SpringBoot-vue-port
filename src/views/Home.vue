<template>
  <div class="home-container">
    <el-container>

      <el-row :gutter="0">
        <el-col :xs="0" :sm="2" :md="2" :lg="3" :xl="3">
          <el-aside>
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#304156"
              text-color="#fff" active-text-color="#409EFF">
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">系统首页</span>
              </el-menu-item>

              <el-menu-item index="2">
                <i class="el-icon-s-custom"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>

              <el-menu-item index="3">
                <i class="el-icon-s-finance"></i>
                <span slot="title">存取款管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-s-finance"></i>
                <span slot="title">测试</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </el-col>

        <el-col :xs="24" :sm="22" :md="22" :lg="21" :xl="21">
          <el-container>
            <el-header>
              <div class="navigation">
                <i class="el-icon-s-unfold"></i>
                <el-breadcrumb>
                  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div>
                <h2>银行卡管理系统</h2>
              </div>
              <div class="user-info">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    <el-avatar shape="square" size="medium"
                      src="https://qq.yh31.com/tp/zjbq/202006162239246617.gif"> admin </el-avatar>
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人信息</el-dropdown-item>
                    <el-dropdown-item command="b">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-header>
            <el-main>
              <h1>hello {{ user }}</h1>
            </el-main>
          </el-container>
        </el-col>
      </el-row>

    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      user: window.sessionStorage.getItem('user').name,
    }
  },
  methods: {
    // 下拉菜单栏函数
    handleCommand(command) {
      console.log(command)
      if (command == 'b') {
        this.logout()
      } else {
        console.log(1)
      }
    },
    // 退出函数
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped lang="scss">
.home-container {
  height: 100vh;
  width: 100vw;
  .el-container {
    width: 100%;
    height: 100%;
    .el-row {
      width: 100%;
      height: 100%;
      .el-aside {
        background-color: #304156;
        height: 100vh;
        width: 100% !important;
        .el-menu {
          border: none !important;
        }
      }
      .el-container {
        .el-header {
          height: 0.85rem !important;
          background-color: #fff;
          border-bottom: 0.0125rem solid #e6e6e6;
          border-right: none;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .el-avatar {
            background-color: #f7f9f8 !important;
            border: 0.0125rem solid #e6e6e6;
          }
          .navigation {
            display: flex;
            align-items: center;
            .el-icon-s-unfold {
              font-size: 0.425rem;
              cursor: pointer;
              margin-right: 0.425rem;
            }
          }
        }
      }
    }
  }
}
</style>

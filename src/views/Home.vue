<template>
  <div class="home-container">
    <el-container>

      <el-aside :width="iscollapse ? '1.2rem' : '200px'">
        <el-menu :default-active="activePath" class="el-menu-vertical-demo"
          background-color="#304156" text-color="#fff" active-text-color="#409EFF" unique-opened
          :collapse="iscollapse" :router="true">

          <el-menu-item index="/welcome" @click="saveActivePath('/welcome')">
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

          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="items in item.subMenus" :key="items.id">
              <el-menu-item :index="items.path+''" @click="saveActivePath(items.path)">
                {{items.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="navigation">
            <i :class="iscollapse?'el-icon-s-fold':'el-icon-s-unfold'" @click="isfold"></i>
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
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  // 生命周期函数
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath') // 去找path
  },
  data() {
    return {
      menuList: [],
      iscollapse: false,
      activePath: '/welcome', // 默认路径
    }
  },
  methods: {
    // 下拉菜单栏函数
    handleCommand(command) {
      if (command == 'b') {
        this.logout()
      } else {
        console.log(this.menuList)
      }
    },
    // 退出函数
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取导航栏
    async getMenuList() {
      let { data: res } = await this.$http.get('menu')
      if (res.status == 2) {
        return this.$message.error('获取列表失败')
      } else {
        this.menuList = res.data
        return this.$message.success('获取用户列表成功')
      }
    },
    // 判断是否折叠
    isfold() {
      this.iscollapse = !this.iscollapse
    },
    // 保存路径
    saveActivePath(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
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

    .el-aside {
      background-color: #304156;
      height: 100vh;
      transition: all 0.5s;
      .el-menu {
        border: none !important;
        width: 100% !important;
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
          .el-icon-s-unfold,
          .el-icon-s-fold {
            font-size: 0.425rem;
            cursor: pointer;
            margin-right: 0.425rem;
          }
        }
      }
      .el-main {
        background-color: #eff1f4 !important;
        height: 100%;
      }
    }
  }
}
</style>

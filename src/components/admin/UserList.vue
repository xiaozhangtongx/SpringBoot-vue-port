<template>
  <div>
    <!-- <h1>用户列表</h1> -->
    <el-card shadow="always">
      <div>
        <el-row :gutter="25">
          <el-col :span="10">
            <el-input placeholder="请输入你内容" class="input-with-select" :autofocus="true">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="2.5">
            <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
          </el-col>
        </el-row>

        <!-- 用户表 -->
        <el-table :data="userList" :stripe="true" border>
          <el-table-column type="selection" width="55" align="center"> </el-table-column>
          <el-table-column prop="username" label="姓名" width="120" align="center">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" align="center">
          </el-table-column>
          <el-table-column prop="password" label="密码" align="center">
          </el-table-column>
          <el-table-column prop="role" label="角色" align="center">
          </el-table-column>
          <el-table-column prop="state" label="状态" align="center">
            <template slot-scope="scope">
              {{scope.row.state}}
              <el-switch v-model="scope.row.state" active-color="#13ce66">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  created() {
    this.getUserList()
  },
  data() {
    return {
      userList: [],
      total: 0,
      // 查询信息
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 5,
      },
    }
  },
  methods: {
    // 获取所有的用户
    async getUserList() {
      const { data: res } = await this.$http.post('userlist', this.queryInfo)
      this.userList = res.data
      this.total = res.number
      console.log(res)
    },
  },
}
</script>

<style scoped lang="scss">
.el-card {
  height: 100%;
  .el-table {
    margin-top: 0.375rem;
  }
}
</style>

<template>
  <div>
    <h1>hello {{username}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      username: '',
    }
  },
  created() {
    this.getUsername()
  },
  methods: {
    // 获取用户信息
    getUsername() {
      this.username = window.sessionStorage.getItem('user')
    },
  },
}
</script>

<style scoped lang='scss'>
</style>
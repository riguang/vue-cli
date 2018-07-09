<template>
  <div>
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    computed: {},
    created() {}
  }
</script>
<style lang="scss" scoped>

</style>

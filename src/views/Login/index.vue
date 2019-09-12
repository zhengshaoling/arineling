<template>
  <div>
    <p>login</p>
    <el-button type="primary" @click="jump">跳转</el-button>
  </div>
</template>
<script>
import Vue from 'vue'
export default{
  methods: {
    jump() {
      this.$router.push('/dashboard/index')
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '@/styles/_var.scss';
  p {
    color: $--color-primary
  }
</style>
<template>
  <div>
    <p>login</p>
    <button @click="jump">跳转</button>
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
<style scoped>

</style>
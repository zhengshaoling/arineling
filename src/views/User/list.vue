<template>
  <div>
    <p>user->首页</p>
    <el-button :loading="loading" @click="test">test</el-button>
  </div>
</template>
<script>
import user from '@/api/user'
export default {
  name: 'User',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async test() {
      this.loading = true;
      const res = await user.test();
      console.log(res, 'res')
      this.loading = false;
    }
  }
}
</script>
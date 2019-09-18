<template>
  <div class="app-container">
    <div class="transfer_box">
      <transfer :list="list" :id="idKey" :name="nameKey" @getList="search"/>
    </div>
    <div class="float">
      <div class="left">
        <line-marker :width="width" :height="width" />
      </div>
      <div class="right">
        <mix-chart />
      </div>
    </div>
  </div>

</template>
<script>
import user from '@/api/user'
import transfer from '@/components/Transfer'
import lineCharts from './components/lineCharts'
import lineMarker from '@/components/Charts/lineMarker'
import mixChart from '@/components/Charts/mixChart'
import keyboard from '@/components/Charts/keyboard'
export default {
  name: 'User',
  components: { transfer, lineCharts, lineMarker, mixChart, keyboard },
  data() {
    return {
      loading: false,
      list: [
        { id: 1, name: 'list1' },
        { id: 2, name: 'list2' },
        { id: 3, name: 'list3' },
        { id: 4, name: 'list4' },
        { id: 5, name: 'list5' },
        { id: 6, name: 'list6' },
        { id: 11, name: 'list11' },
        { id: 21, name: 'list21' },
        { id: 31, name: 'list31' },
        { id: 41, name: 'list41' },
        { id: 51, name: 'list51' },
        { id: 61, name: 'list61' }
      ],
      idKey: 'id',
      nameKey: 'name',
      width: '500px'
    }
  },
  methods: {
    search(params){
      console.log(params, 'params')
    },
    async test() {
      this.loading = true;
      const res = await user.test();
      console.log(res, 'res')
      this.loading = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  margin: 5px;
  .transfer_box {
    width: 90%;
    text-align: center;
    height: auto;
  }
  .float {
    .left {
      width: 49%;
    }
    .right {
      width: 49%;
    }
  }
}

</style>
<template>
  <div>
    <div class="searchBox">
      <form-search :form-data="formData" @onSubmit="submit" @reset="reset"/>
    </div>

    <div>首页</div>
  </div>
</template>
<script>
import Vue from 'vue'
import formSearch from '@/components/FormSearch'
export default{
  name: 'Index',
  components: { formSearch },
  data() {
    return {
      imgUrl: '@/assets/test.png',
      action: '',
      data: [
        { id: 1, name: 'ling' },
        { id: 2, name: 'shao' },
        { id: 3, name: 'zheng' },
        { id: 4, name: 'what' },
        { id: 5, name: 'name1' }
      ],
      formData: {
        advanceList: [
          {
            key: 'text',
            type: 'input',
            name: 'settleNo',
            label: '流水号'
          }, {
            key: 'text',
            type: 'input',
            name: 'purName',
            label: '采购商名称'
          }, {
            key: 'daterange',
            type: 'date',
            startName: 'createDateStart',
            endName: 'createDateEnd',
            label: '生成时间',
            format: 'yyyy/MM/dd'
          }
        ],
        commonList: [
          {
            key: 'text',
            type: 'input',
            name: 'no',
            label: '账单号'
          }, {
            key: 'select',
            type: 'select',
            name: 'payType',
            label: '结算方式',
            labelKey: 'value',
            valueKey: 'key',
            list: []
          }
        ]
      },
      params: {}
    }
  },
  created() {

  },
  methods: {
    getList() {

    },
    handle(data) {

    },
    submit(data) {
      this.params = { ...this.params, ...data }
      this.getList()
    },
    reset() {

    }
  }
}
</script>
<style scoped>

</style>
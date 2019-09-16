<template>
  <div>
    <div class="searchBox">
      <form-search :form-data="formData" @onSubmit="submit" @reset="reset"/>
      <list-table :api="getList" :params="query" @selection-change="handleSelectionChange">
        <el-table-column fixed="left" type="selection" class="selection" prop="id" width="45" align="center"/>
      </list-table>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { corpTypeEnum, regFromEnum, statusEnum, regTypeEnum } from './components/selectList';
import formSearch from '@/components/FormSearch'
import listTable from '@/components/ListTable'
export default{
  name: 'Index',
  components: { formSearch, listTable },
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
        popoverList: [
          {
            key: 'select',
            type: 'select',
            name: 'status',
            label: '审核状态',
            labelKey: 'label',
            valueKey: 'value',
            list: statusEnum
          },
          {
            key: 'select',
            type: 'select',
            name: 'type',
            label: '企业类型',
            labelKey: 'label',
            valueKey: 'value',
            list: corpTypeEnum
          },
          {
            key: 'text',
            type: 'input',
            name: 'contactName',
            label: '姓名'
          },
          {
            key: 'text',
            type: 'input',
            name: 'code',
            label: '企业编号'
          },
          {
            key: 'text',
            type: 'input',
            name: 'inviter',
            label: '邀请人'
          },
          {
            key: 'select',
            type: 'select',
            name: 'regType',
            label: '身份类型',
            labelKey: 'label',
            valueKey: 'value',
            list: regTypeEnum
          },
          {
            key: 'select',
            type: 'select',
            name: 'regFrom',
            label: '注册来源',
            labelKey: 'label',
            valueKey: 'value',
            list: regFromEnum
          },
          {
            key: 'select',
            type: 'select',
            name: 'certFrom',
            label: '认证来源',
            labelKey: 'label',
            valueKey: 'value',
            list: regFromEnum
          },
          {
            key: 'date',
            type: 'date',
            startName: 'auditDateStart',
            endName: 'auditDateEnd',
            label: '审核时间',
            format: 'yyyy/MM/dd'
          },
          {
            key: 'date',
            type: 'date',
            startName: 'createDateStart',
            endName: 'createDateEnd',
            label: '创建时间',
            format: 'yyyy/MM/dd'
          }
        ],
        commonList: [
          {
            key: 'text',
            type: 'input',
            name: 'name',
            label: '企业名称'
          }, {
            key: 'text',
            type: 'input',
            name: 'contactPhone',
            label: '联系电话'
          }
        ]
      },
      params: {},
      query: {},
      selection: []
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
      this.query = { ...data }
      this.getList()
    },
    reset() {

    },
    handleSelectionChange(selection) {
      this.selection = selection;
    }
  }
}
</script>
<style scoped>

</style>
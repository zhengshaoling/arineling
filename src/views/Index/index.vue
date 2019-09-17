<template>
  <div class="app-container">
    <div class="searchBox">
      <form-search :form-data="formData" @onSubmit="submit" @reset="reset"/>
    </div>
    <div class="btn-group">
      <el-button type="primary" @click="exportExcel">导出</el-button>
      <span class="table-column">
        <table-column-picker :columns="columns" />
      </span>
    </div>
    <list-table ref="table" :api="getTableList" :params="params" @selection-change="handleSelectionChange">
      <el-table-column fixed="left" type="selection" class="selection" prop="id" width="45" align="center"/>
      <el-table-column prop="rejectNo" width="150" align="center" label="退货单号" fixed="left"/>
      <el-table-column width="120" align="center" label="退货状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status | rejectStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="purName" width="220" align="center" label="采购商名称" show-overflow-tooltip/>
      <el-table-column prop="supName" width="220" align="center" label="供应商名称" show-overflow-tooltip/>
      <el-table-column prop="addressAlias" width="180" align="center" label="退货仓库"/>
      <el-table-column width="160" align="center" label="退货日期">
        <template slot-scope="scope">
          <span>{{ scope.row.rejectDate | YmdDate }}</span>
        </template>
      </el-table-column>
      <el-table-column width="160" align="center" label="退货总金额">
        <template slot-scope="scope">
          <el-tooltip :content="scope.row.rejectTotal | toString" class="item" effect="dark" placement="right-end">
            <span>{{ scope.row.rejectTotal | stringTwoDecimal }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column width="120" align="center" label="退货操作人" prop="purUserName"/>
      <el-table-column width="160" align="center" label="退货操作时间">
        <template slot-scope="scope">
          <span>{{ scope.row.submitTime | YmdHisDate }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120" align="center" label="退货单流水号" prop="no"/>
      <el-table-column align="center" label="操作" width="200" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="deleteRow(scope)">删除</el-button>
        </template>
      </el-table-column>
    </list-table>
  </div>
  </div>
</template>
<script>
import { corpTypeEnum, regFromEnum, statusEnum, regTypeEnum } from './components/selectList';
import formSearch from '@/components/FormSearch'
import listTable from '@/components/ListTable'
import TableColumnPicker from '@/components/TableColumnPicker'
import { getTableList } from '@/api/dashboard'
import { fileFlowExcel } from '@/utils/common'
export default{
  name: 'Index',
  components: { formSearch, listTable, TableColumnPicker },
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
            name: 'purName',
            label: '采购商'
          },
          {
            key: 'text',
            type: 'input',
            name: 'supName',
            label: '供应商'
          },
          {
            key: 'text',
            type: 'input',
            name: 'addName',
            label: '仓库'
          },
          {
            key: 'daterange',
            type: 'date',
            startName: 'rejectStartDate',
            endName: 'rejectEndDate',
            label: '退货时间',
            format: 'yyyy/MM/dd'
          }
        ],
        commonList: [
          {
            key: 'text',
            type: 'input',
            name: 'rejectNo',
            label: '单号'
          }, {
            key: 'text',
            type: 'input',
            name: 'no',
            label: '流水号'
          },
          {
            key: 'select',
            type: 'select',
            name: 'status',
            label: '退货单账号',
            labelKey: 'label',
            valueKey: 'value',
            list: [{
              label: '编辑中',
              value: 1
            }, {
              label: '待确认',
              value: 2
            }, {
              label: '已确认',
              value: 3
            }, {
              label: '已驳回',
              value: 4
            }]
          }
        ]
      },
      columns: {
        no: {
          name: '流水号',
          show: true
        },
        rejectNo: {
          name: '单号',
          show: true
        },
        purName: {
          name: '采购商',
          show: true
        },
        supName: {
          name: '供应商',
          show: true
        },
        addressAlias: {
          name: '仓库',
          show: true
        }
      },
      params: {},
      selection: [],
      tableList: [],
      getTableList
    }
  },
  watch: {
    params() {
      this.reload();
    }
  },
  methods: {
    reload() {
      this.$refs.table.reload();
    },
    submit(data) {
      this.params = { ...data }
      console.log(this.params, 'this.params')
    },
    reset() {
      this.params = {};
    },
    handleSelectionChange(selection) {
      this.selection = selection;
    },
    deleteRow(row) {
      console.log(row, 'row')
    },
    async exportExcel() {
      try {
        this.queryLoading = true;
        const fileName = `订单导出${parseTime(Date.now(), '{y}-{m}-{d} {h}:{i}:{s}')}.xlsx`;
        await fileFlowExcel(process.env.BASE_API + '/odr/protected/order/exportOrderExcel', this.params, fileName);
      } catch (e) {
        this.queryLoading = false;
      }
      this.queryLoading = false;
    }
  }
}
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.app-container {
  margin: 5px;
}
</style>
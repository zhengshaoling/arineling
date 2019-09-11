<template>
  <div>
    <div class="warp">
      <div class="panel">
        <el-input
          v-model="params.name"
          placeholder="请输入名称"
          class="el-transfer-panel__filter"
          size="small"
          @mouseenter.native="inputHover = true"
          @mouseleave.native="inputHover = false"
          @input="debounceGetAll"
          @keydown.enter.native="getList"
        >
          <i
            slot="prefix"
            :class="['el-input__icon', 'el-icon-' + inputIcon]"
            @click="clearQuery"
          />
        </el-input>
        <el-table :data="list" highlight-current-row style="width: 100%" max-height="300" @selection-change="handleSelectionLeft">
          <el-table-column :selectable="ifselected" type="selection" width="55" />
          <el-table-column align="center" label="全部列表">
            <template slot-scope="scope" property="false">{{ scope.row.name }}</template>
          </el-table-column>
        </el-table>
        <pagination :page="page" :layout="layout" @paging="pages" />
      </div>
      <div class="btn" style="padding: 0 5px;">
        <el-button
          :disabled="rightChecked.length === 0"
          type="primary"
          @click.native="addToLeft"
        >
          <i class="el-icon-arrow-left" />
          <span> 还原 </span>
        </el-button>
        <el-button
          :disabled="leftChecked.length === 0"
          type="primary"
          @click.native="addToRight"
        >
          <span> 添加 </span>
          <i class="el-icon-arrow-right" />
        </el-button>
      </div>
      <div class="panel">
        <el-input
          v-model="query"
          placeholder="请输入搜索名称"
          class="el-transfer-panel__filter"
          size="small"
          @mouseenter.native="inputHover = true"
          @mouseleave.native="inputHover = false"
        >
          <i
            slot="prefix"
            :class="['el-input__icon', 'el-icon-' + inputRightIcon]"
            @click="clearQueryRight"
          />
        </el-input>
        <el-table :data="query? filteredData: selectedList" highlight-current-row style="width: 100%" max-height="300" @selection-change="handleSelectionRight">
          <el-table-column type="selection" width="55" />
          <el-table-column align="center" label="已选择列表">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
        </el-table>
        <pagination :page="rightPage" :total="query? filteredData.length: selectedList.length" layout="total" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'
import pagination from './Pagination'
import { defaultPage } from '@/utils/default'

export default {
  name: 'Transfer',
  components: { pagination },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    page: {
      type: String,
      default() {
        return defaultPage()
      }
    }
  },
  data() {
    return {
      selectedList: [], // 选择的企业列表
      leftChecked: [],
      rightChecked: [],
      query: '', // 右边选中框的搜索
      inputHover: false,
      params: {
        name: ''
      },
      rightPage: defaultPage()
    }
  },
  computed: {
    inputIcon() {
      return this.params.name && this.inputHover
        ? 'circle-close'
        : 'search'
    },
    inputRightIcon() {
      return this.query && this.inputHover
        ? 'circle-close'
        : 'search'
    },
    filteredData() {
      return this.selectedList.filter(item => {
        const name = item.name
        return name.toLowerCase().indexOf(this.query.toLowerCase()) > -1
      })
    }
  },
  watch: {
    'selectedList': function() {
      this.rightPage.totalSize = this.selectedList.length
    }
  },
  methods: {
    getList() {
      this.$emit('getList', this.params)
    },
    // 判断是否可选
    ifselected(row) {
      return (!this.selectedList.some(item => item.id === row.id))
    },
    // 还原
    addToLeft() {
      this.rightChecked.forEach(item => {
        const index = this.selectedList.indexOf(item)
        if (index > -1) {
          this.selectedList.splice(index, 1)
        }
      })
    },
    //  添加
    addToRight() {
      const itemsToBeMoved = []
      this.leftChecked.forEach(item => {
        if (!(this.selectedList.some(selected_item => { selected_item.id === item.id }))) itemsToBeMoved.push(item)
      })
      this.selectedList = this.selectedList.concat(itemsToBeMoved)
      this.selectedList = this.selectedList.filter((x, index, self) => self.indexOf(x) === index)
      console.log(this.selectedList, '经过添加之后的selectedList')
    },
    // 监听左边选中行
    handleSelectionLeft(val) {
      this.leftChecked = val
      console.log(this.leftChecked, 'leftChecked')
    },
    // 监听右边选中行
    handleSelectionRight(val) {
      this.rightChecked = val
      console.log(this.rightChecked, 'rightChecked')
    },
    // 左边高级搜索监听
    debounceGetAll: _.debounce(function() {
      this.resetPage()
      this.getList()
    }, 1000),
    // 清空搜索
    clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.params.name = ''
        this.getList()
      }
    },
    // 清空右边搜索
    clearQueryRight() {
      if (this.inputRightIcon === 'circle-close') {
        this.query = ''
      }
    },
    // 切换分页
    pages() {
      this.params.pageNo = this.page.pageNo
      this.params.pageSize = this.page.pageSize
      this.getList()
    },
    // 重置页数
    resetPage() {
      this.page = defaultPage()
      this.params = { ...this.params, ...this.page }// 重置分页
      this.getList()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .warp {
    display: flex;
    align-items: center;
    height: 400px;
    width: 80%;
    margin: 10px auto;
    .panel {
      width: 45%;
      .el-table {
        height: 400px;
        margin: 15px auto;
      }
      .el-input {
        width: 85%;
        margin: 0 auto;
      }
    }
    .btn {
      width: 10%;
      display: flex;
      flex-direction: column;
      .el-button {
        width:80px;
        margin: 5px auto;
      }
    }
  }
</style>

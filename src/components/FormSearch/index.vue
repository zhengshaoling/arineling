<template>
  <div>
    <div v-if="formData.advanceList && formData.advanceList.length > 0" class="advanceSearch">
      <el-popover ref="advanced" placement="bottom" width="500" tirgger="hover">
        <el-form ref="advanceSearch" :model="params" label-position="right" label-width="100px">
          <el-form-item v-for="item in formData.advanceList" :key="item.label" :label="item.label">
            <!--文本输入框-->
            <el-input v-if="item.key==='text'" v-model.trim="params[item.name]" :placeholder="item.label" type="item.type" clearable @input="debounceGetList" />
            <!--单选框-->
            <el-select v-if="item.key==='select'" v-model="params[item.name]" :placeholder="item.label" @change="debounceGetList">
              <el-option v-if="!item.closeAll" :value="typeof(params[item.name])=='string' ? '' : null" label="全部" />
              <el-option v-for="(enumValue, enumKey) in item.list" :key="enumKey" :label="enumValue[item.labelKey]" :value="enumValue[item.valueKey]" />
            </el-select>
            <!--开关-->
            <el-switch v-if="item.key==='switch'" v-model="params[item.name]" :active-value="item.activeValue" :inactive-value="item.inactiveValue" active-color="#FF9C00" inactive-color="#dcdfe6" @change="debounceGetList" />
            <!--日期范围-->
            <el-row v-if="item.key==='daterange'">
              <el-col :span="11">
                <el-date-picker v-model="params[item.startName]" :type="item.type" :format="item.format" :value-format="item.format" placeholder="起始日期" style="width:100%;" @change="debounceGetList" />
              </el-col>
              <el-col :span="2" style="text-align:center;">-</el-col>
              <el-col :span="11">
                <el-date-picker v-model="params[item.endName]" :type="item.type" :format="item.format" :value-format="item.format" placeholder="结束日期" style="width:100%;" @change="debounceGetList" />
              </el-col>
            </el-row>
            <!--数字范围-->
            <el-row v-if="item.key==='numrange'">
              <el-col :span="11">
                <el-input v-model="params[item.startName]" :type="item.type" placeholder="起始点" style="width:100%;" @change="debounceGetList" />
              </el-col>
              <el-col :span="2" style="text-align:center;">-</el-col>
              <el-col :span="11">
                <el-input v-model="params[item.endName]" :type="item.type" placeholder="结束点" style="width:100%;" @change="debounceGetList" />
              </el-col>
            </el-row>
            <!--多选框-->

          </el-form-item>
        </el-form>
      </el-popover>
    </div>
    <div class="commonSearch">
      <el-form ref="commonSearch" :model="params" label-position="right" label-width="100px" inline>
        <el-form-item v-for="item in formData.commonList" :key="item.label" :label="item.label">
          <!--文本输入框-->
          <el-input v-if="item.key==='text'" v-model.trim="params[item.name]" :placeholder="item.label" type="item.type" clearable />
          <!--单选框-->
          <el-select v-if="item.key==='select'" v-model="params[item.name]" :placeholder="item.label">
            <el-option v-if="!item.closeAll" :value="typeof(params[item.name])=='string' ? '' : null" label="全部" />
            <el-option v-for="(enumValue, enumKey) in item.list" :key="enumKey" :label="enumValue[item.labelKey]" :value="enumValue[item.valueKey]" />
          </el-select>
          <!--开关-->
          <el-switch v-if="item.key==='switch'" v-model="params[item.name]" :active-value="item.activeValue" :inactive-value="item.inactiveValue" active-color="#FF9C00" inactive-color="#dcdfe6" />
          <!--日期范围-->
          <el-row v-if="item.key==='daterange'">
            <el-col :span="11">
              <el-date-picker v-model="params[item.startName]" :type="item.type" :format="item.format" :value-format="item.format" placeholder="起始日期" style="width:100%;" />
            </el-col>
            <el-col :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-date-picker v-model="params[item.endName]" :type="item.type" :format="item.format" :value-format="item.format" placeholder="结束日期" style="width:100%;" />
            </el-col>
          </el-row>
          <!--数字范围-->
          <el-row v-if="item.key==='numrange'">
            <el-col :span="11">
              <el-input v-model="params[item.startName]" :type="item.type" placeholder="起始点" style="width:100%;" />
            </el-col>
            <el-col :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-input v-model="params[item.endName]" :type="item.type" placeholder="结束点" style="width:100%;" />
            </el-col>
          </el-row>
          <!--多选框-->
        </el-form-item>
        <el-form-item>
          <el-button v-popover:advanced v-if="formData.advanceList && formData.advanceList.length > 0" type="primary">高级搜索</el-button>
          <el-button type="primary" icon="el-icon-search" @click="getList">查询</el-button>
          <el-button type="warning" icon="el-icon-refresh" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'
import { defaultPage } from '@/utils/default'

export default {
  name: 'FormSearch',
  props: {
    formData: {
      type: Object,
      default() {
        return {}
      }
    },
    initialParam: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    params: {
      get: function() {
        return this.initialParam
      },
      set: function() {
        console.log('不操作')
      }
    }
  },
  methods: {
    // 提交表单搜索
    getList() {
      this.$emit('onSubmit', this.params)
    },
    resetPage() {
      const page = defaultPage()
      this.params = { ...this.params, ...page }
    },
    // 重置
    reset() {
      for (const item in this.params) {
        this.params[item] = ''
        delete this.params[item]
      }
      this.$emit('reset')
    },
    // 高级搜索
    debounceGetList: _.debounce(function() {
      this.resetPage()
      this.getList()
    }, 1000)
  }

}
</script>

<style scoped>

</style>

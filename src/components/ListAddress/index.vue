<template>
  <div class="listAddress">
    <el-cascader :options="listData" v-model="option" :props="props" :disabled="disabled" placeholder="输入城市名" filterable change-on-select @change="handleItemChange" />
  </div>
</template>
<script>
import { Level3Areas } from '@/api/common'
import { getCascaderObj } from '@/utils'
export default {
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    code: {
      type: Array,
      required: true
    },
    allObj: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      listData: [],
      props: {
        label: 'name',
        value: 'code',
        children: 'children'
      },
      option: []
    };
  },
  watch: {
    code: {
      handler() {
        this.option=this.code;
      },
      immediate: true
    }
  },
  mounted() {
    this.list();
  },
  methods: {
    list() {
      Level3Areas().then(res => {
        this.listData = res.list;
      });
    },
    handleItemChange(val) {
      if (this.allObj){
        const label=getCascaderObj(this.option, this.listData, 'code')
        this.$emit('Level3Areas', label)
      } else {
        this.$emit('Level3Areas', val)
      }
    }
  }
};
</script>
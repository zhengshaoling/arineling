<template>
  <div class="srm">
    <el-tabs style="margin: 15px 5px;" type="border-card">
      <el-tab-pane label="form表单">
        <el-form ref="formData" :model="form" label-width="150px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="名称">
                <el-input v-model="form.name"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="select选择框">
                <el-select v-model="form.select">
                  <el-option
                    v-for = "item in selectList"
                    :key = "item.value"
                    :label = "item.label"
                    :value ="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单选框">
                <el-radio-group v-model="form.radio">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">停用</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="时间范围">
                <el-col :span="11">
                  <el-date-picker v-model="form.startDate" type="date" placeholder="开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 100%;" />
                </el-col>
                <el-col :span="2" class="line">-</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="form.endDate" type="date" placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 100%;" />
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="所在地址">
                <list-address :disable="disabled" :code="treePath" @Level3Areas="handleDisCodeChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="富文本編輯器">
                <vue-ueditor-wrap v-model="form.descript" :config="config" style="width: 100%;background: #fafafa;"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin: 10px 100px; ">
            <el-col :span="8" style="margin: 2px auto;">
              <div class="title">登陆页面LOGO</div>
              <image-upload :img-url="loginLogo" :action="action" @handelSuccess="uploadLoginLogoSuccess" @handleRemove="removeLoginLogoSuccess" />
            </el-col>
            <el-col :span="8" style="margin: 2px auto;">
              <div class="title">平台LOGO</div>
              <image-upload :img-url="sysLogo" :action="action" @handelSuccess="uploadsysLogoSuccess" @handleRemove="removesysLogoSuccess" />
            </el-col>
            <el-col :span="8" style="margin: 2px auto;">
              <div class="title">登陆界面背景图</div>
              <image-upload :img-url="loginBg" :action="action" @handelSuccess="uploadLoginBgSuccess" @handleRemove="removeLoginBgSuccess" />
            </el-col>
          </el-row>
          <div class="btn-group">
            <el-form-item>
              <el-button class="btn" type="primary" @click="submit">提交</el-button>
              <el-button type="warning" @click="cancel">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import imageUpload from '@/components/ImageUpload'
import listAddress from '@/components/ListAddress'
export default{
  components: { imageUpload, listAddress },
  data() {
    return {
      action: '/srm/service/comm/beanCrud/srm.SrmSetupVO/fileUpload2',
      loginLogo: '',
      sysLogo: '',
      loginBg: '',
      config: {
        UEDITOR_HOME_URL: '/static/UEditor/'
      },
      form: {
        name: '',
        select: '',
        radio: '',
        startDate: '',
        endDate: '',
        descript: '',
        disCode: ''
      },
      selectList: [
        { label: 1, value: 'list1' },
        { label: 2, value: 'list2' },
        { label: 3, value: 'list3' }
      ],
      treePath: [], // 三级联动
      disabled: false
    }
  },
  methods: {
    // 城市选择器选择的事件
    handleDisCodeChange(disCodeArray){
      this.formData.disCode = disCodeArray[2] || '';
    },
    uploadLoginLogoSuccess(data) {
      if (!data) {
        this.$message.error('图片上传失败');
        return false;
      }
      this.loginLogo = data;
    },
    removeLoginLogoSuccess() {
      this.loginLogo = '';
    },
    uploadsysLogoSuccess(data) {
      if (!data) {
        this.$message.error('图片上传失败');
        return false;
      }
      this.sysLogo = data;
    },
    removesysLogoSuccess() {
      this.sysLogo = '';
    },
    uploadLoginBgSuccess(data) {
      if (!data) {
        this.$message.error('图片上传失败');
        return false;
      }
      this.loginBg = data;
    },
    removeLoginBgSuccess() {
      this.loginBg = '';
    },
    cancel() {

    },
    submit() {

    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin: 5px;
  text-align: left;
  font-size: 16px;
  color:darkgrey;
}
.btn-group {
  margin: 10px;
  text-align: center;
  .btn {
    width: 150px;
  }
}
</style>
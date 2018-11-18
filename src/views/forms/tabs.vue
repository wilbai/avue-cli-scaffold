<template>
  <div>
    <basic-container>
      <avue-tabs :option="option"
                 v-model="form"
                 @change="handleChange"
                 @submit="handleSubmit">
        <div slot="before">
          {{type}}头部卡槽
        </div>
        <template slot-scope="scope"
                  slot="name">
          <avue-crud-input @click.native="tip"
                           :disabled="scope.column.disabled"
                           v-model="scope.value">
          </avue-crud-input>
        </template>
        <div slot="after">
          {{type}}尾部卡槽
        </div>
      </avue-tabs>
    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/forms/tabsOption'
export default {
  data () {
    return {
      option: option,
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-tabs-option',
        modifiable: false
      },
      type: 'user',
      obj: {
        user: {
          username: '用户信息',
          name: 'smallwei'
        },
        shanghu: {
          owName: '商户信息'
        },
        weixin: {
          weixinName: '微信信息'
        },
        qq: {
          qqName: 'qq信息'
        }
      },
      form: {

      },
    }
  },
  created () {
    this.handleWitch();
  },
  methods: {
    handleChange (item) {
      this.type = item.prop;
      this.handleWitch();
    },
    handleWitch () {
      this.form = this.obj[this.type];
    },
    handleSubmit () {
      this.$message({
        message: this.form,
        type: "success"
      });
    },
    tip () {
      this.$message({
        message: "点击事件"
      });
    },
  }
}
</script>

<style>
</style>

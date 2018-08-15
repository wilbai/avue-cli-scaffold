<template>
  <div>
    <basic-container>
      <avue-crud :option="option"
                 :data="data"
                 @row-update="rowUpdate"></avue-crud>
    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/table/editOption'
export default {
  data () {
    return {
      data: [
        {
          name: '张三',
          sex: '男'
        }, {
          name: '李四',
          sex: '女'
        }
      ],
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'table-edit-option',
        modifiable: false
      },
      option: option
    }
  },
  methods: {
    rowUpdate (form, index, done) {
      this.$message.success('编辑数据' + JSON.stringify(form) + '数据序号' + index);
      done();
    },
  }
}
</script>

<style>
</style>

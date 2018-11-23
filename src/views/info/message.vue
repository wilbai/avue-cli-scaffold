<template>
  <div>
    <basic-container>
      <avue-tabs :option="option"
                 v-model="form"
                 @change="handleChange"
                 @submit="handleSubmit"
                 @selection-change="selectionChange"
                 :data="data"
                 :page="page">
        <template slot="before">
          <el-button size="small"
                     @click="handleDel">全部已读</el-button>
          <el-button size="small"
                     @click="handleDel">标记已读</el-button>
          <el-button size="small"
                     @click="handleDel">删除</el-button>
        </template>
      </avue-tabs>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/info/message'
import { validatenull } from '@/util/validate'
export default {
  data () {
    return {
      form: {},
      type: 'message',
      option: option,
      checkList: [],
      page: {
        currentPage: 1,
        total: 100,
        pageSize: 10
      },
      data: []
    }
  },
  created () {
    this.handleWitch();
  },
  methods: {
    handleSubmit () {
      this.$message({
        message: this.form,
        type: "success"
      });
    },
    handleWitch () {
      if (this.type === 'all') {
        this.data = [
          {
            title: '你好新朋友，感谢使用 avue-cli',
            date: '2018-11-23'
          }, {
            title: 'smallwei发来一条私信',
            date: '2018-11-23'
          }]

      } else if (this.type === 'msg') {
        this.data = [{
          title: 'smallwei发来一条私信',
          date: '2018-11-23'
        }, {
          title: 'smallwei发来一条私信',
          date: '2018-11-23'
        }]
      }
    },
    selectionChange (list) {
      this.checkList = list;
    },
    handleDel () {
      if (validatenull(this.checkList)) {
        this.$message.warning('请选择至少一条数据')
      } else {
        this.$message.success('操作成功')
      }

    },
    handleChange (item) {
      this.type = item.prop;
      this.handleWitch();
    },
  }
};
</script>

<style>
</style>

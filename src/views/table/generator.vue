<template>
  <div>
    <basic-container>
      <avue-form :option="formOption"
                 ref="form"
                 v-model="form">
      </avue-form>
      <avue-crud ref="crud"
                 v-model="tableForm"
                 :option="tableOption"
                 :before-open="boxhandleOpen"
                 :data="column"
                 @row-update="handleUpdate"
                 @row-del="handleDel"
                 @row-save="handleSave">
        <template slot="menuLeft">
          <el-button size="small"
                     type="danger"
                     icon="el-icon-delete"
                     @click="reset">清空</el-button>
          <el-button size="small"
                     icon="el-icon-plus"
                     v-clipboard:copy="message"
                     v-clipboard:success="onCopy"
                     v-clipboard:error="onError">复 制</el-button>
        </template>
      </avue-crud>
    </basic-container>
    <basic-container>
      <tree-view :data="result"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import { setStore, getStore, removeStore } from '@/util/store'
import { validatenull } from "@/util/validate";
import tableOption from "@/const/table/tableGenerator";
import formOption from "@/const/table/formGenerator";
export default {
  name: "table-generator",
  components: {},
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'option',
        modifiable: false
      },
      tableOption: tableOption(),
      formOption: formOption,
      form: {},
      tableForm: {},
      column: [],
    };
  },
  computed: {
    type () {
      return this.tableForm.type || ''
    },
    result () {
      let form = Object.assign({}, this.form)
      for (let o in form) {
        if (validatenull(form[o])) {
          delete form[o];
        }
      }
      form.column = [].concat(this.column);
      form.column.forEach(ele => {
        for (let o in ele) {
          if (validatenull(ele[o])) {
            delete ele[o];
          }
        }
      });
      return form;
    },
    message () {
      return JSON.stringify(this.result, null, 2)
    }
  },

  watch: {
    column: {
      handler (n) {
        setStore({ name: '$table', content: n })
      },
      deep: true
    },
    form: {
      handler (n) {
        setStore({ name: '$form', content: n })
      },
      deep: true
    }
  },
  created () {
    this.init();
  },
  mounted () { },
  props: [],
  methods: {
    boxhandleOpen (show) {
      show();
    },
    init () {
      this.form = getStore({ name: '$form' }) || {}
      this.column = getStore({ name: '$table' }) || []
    },
    reset () {
      this.$refs.form.resetForm();
      this.column = [];
      removeStore({ name: '$table' })
      removeStore({ name: '$form' })
      this.$message.success(`清除成功`)
    },
    onCopy () {
      this.$message.success(`复制成功`)
    },
    onError () {
      this.$message.error(`复制失败`)
    },
    handleSave (row, done) {
      this.column.push(row);
      this.$message.success('添加成功');
      done();
    },
    handleUpdate (row, index, done) {
      this.column.splice(index, 1, row);
      this.$message.success('修改成功');
      done();
    },
    handleDel (row, index) {
      this.$confirm(`是否确认删除`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.column.splice(index, 1);
        this.$message.success('删除成功');
      }).catch(() => { });
    }
  }
};
</script>

<style lang="scss" scoped>
.generator-container {
  padding: 20px 10px;
  box-sizing: border-box;
}
</style>


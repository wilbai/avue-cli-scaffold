<template>
  <div class="table-container pull-chheight">
    <basic-container>
      <avue-crud :option="tableOption"
                 v-model="user"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :before-open="boxhandleOpen"
                 :before-close="boxhandleClose"
                 :row-class-name="tableRowClassName"
                 @row-dblclick="handleRowDBLClick"
                 @row-click="handleRowClick"
                 :page="page"
                 ref="crud"
                 @row-save="handleSave"
                 @row-update="handleUpdate"
                 @row-del="handleDel"
                 @refresh-change="handlerefreshChange"
                 @current-change="handleCurrentChange"
                 @search-change="handleSearchChange"
                 @selection-change="handleSelectionChange">
        <template slot="menuLeft">
          <el-button type="primary"
                     @click="handleRowEdit"
                     size="small">编 辑</el-button>
          <el-button type="primary"
                     @click="handleRowDel"
                     size="small">删 除</el-button>
          <el-button type="info"
                     @click="handleExport"
                     size="small"
                     v-if="permission.sys_crud_btn_export">导出excel</el-button>
          <el-button type="warning"
                     @click="handleJpeg"
                     size="small">导出图片</el-button>
          <el-button type="danger"
                     @click="toggleSelection([tableData[1]])"
                     size="small">切换第二选中状态</el-button>
          <el-button @click="toggleSelection()"
                     size="small">取消选择</el-button>
          <el-button type="success"
                     size="small"
                     v-if="permission.sys_crud_btn_add">
            <router-link :to="{path:'/forms/index'}">
              表单CRUD
            </router-link>
          </el-button>
        </template>
        <template slot="menuRight">
          <el-button type="primary"
                     icon="el-icon-edit"
                     @click="handleRowEdit"
                     circle
                     size="small"></el-button>
          <el-button type="danger"
                     icon="el-icon-delete"
                     circle
                     size="small"
                     @click="handleRowDel"></el-button>
        </template>
        <template slot-scope="props"
                  slot="expand">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="数字">
              <span>{{ props.row.number }}</span>
            </el-form-item>
            <el-form-item label="类型">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="权限">
              <span>{{ props.row.grade }}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
        <template slot-scope="scope"
                  slot="username">
          <el-tag>{{scope.row.username}}</el-tag>
        </template>
        <template slot-scope="scope"
                  slot="nameForm">
          <avue-crud-input @click.native="tip"
                           v-model="user.name">
          </avue-crud-input>
        </template>
        <template slot-scope="scope"
                  slot="moreselect">
          <span v-html="scope.label"></span>
        </template>
        <template slot-scope="scope"
                  slot="menuForm">
          <el-button @click="tip(scope)"
                     v-if="scope.type=='edit'">自定义按钮</el-button>
        </template>
        <template slot-scope="scope"
                  slot="menu">
          <el-button icon="el-icon-check"
                     size="small"
                     @click.stop="handleGrade(scope.row,scope.index)">权限</el-button>
        </template>
      </avue-crud>
    </basic-container>
    <basic-container>
      <tree-view :data="tableOption"
                 :options="jsonOption"></tree-view>
    </basic-container>

    <el-dialog title="菜单"
               :visible.sync="grade.box"
               width="40%">
      <el-tree :data="menuAll"
               :default-checked-keys="grade.check"
               :default-expanded-keys="grade.check"
               show-checkbox
               node-key="id">
      </el-tree>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="handleGradeUpdate">更新</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import html2canvas from 'html2canvas';
import tableOption from '@/const/table/tableOption';
import { parseTime } from '@/filters/'
import { validatenull } from '@/util/validate';
import { getTableData } from '@/api/user'
export default {
  name: 'table',
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'table-option',
        modifiable: false
      },
      tableSearch: {},
      tableOption: tableOption, //表格设置属性
      tableData: [], //表格的数据
      tableRow: {},
      tablePage: 1,
      tableLoading: false,
      tabelObj: {},
      formJson: '',
      user: {},
      page: {
        total: 0, //总页数
        currentPage: 1, //当前页数
        pageSize: 10, //每页显示多少条
      },
      grade: {
        box: false,
        check: [],
      },
    };
  },
  created () {
    this.handleList();
  },
  watch: {},
  mounted () { },
  computed: {
    ...mapGetters(['permission', 'menuAll']),
  },
  props: [],
  methods: {
    tableRowClassName ({ rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    tip (msg) {
      this.$notify({
        message: msg || '点击事件',
      });
    },
    /**
     * @title 刷新数据
     *
     **/
    handlerefreshChange (page) {
      this.handleList(this.tableSearch);
      this.$notify({
        message: `刷新数据成功${JSON.stringify(page)}`,
        type: 'success',
      });
    },
    /**
     * @title 权限更新
     *
     **/
    handleGradeUpdate () {
      this.tabelObj.check = [].concat(this.grade.check);
      this.tabelObj = {};
      this.grade.check = [];
      this.grade.box = false;
    },
    /**
     * @title 权限选择
     *
     **/
    handleGradeCheckChange (data, checked) {
      if (checked) {
        this.grade.check.push(data.id);
      } else {
        this.grade.check.splice(this.grade.check.indexOf(data.id), 1);
      }
    },
    handleRowEdit () {
      if (validatenull(this.tableRow)) {
        this.$notify({
          showClose: true,
          message: '请选择一行要编辑的数据',
          type: 'error',
        });
        return false;
      } else if (this.tableRow.length > 1) {
        this.$notify({
          showClose: true,
          message: '请选择一行数据，不要选择多行',
          type: 'error',
        });
        return false;
      }
      this.handleEdit(this.tableRow[0], -1);
    },
    handleEdit (row, index) {
      this.$refs.crud.rowEdit(row, index);
    },
    /**
     * @title 打开权限
     */
    handleGrade (row) {
      this.$store.dispatch('GetMenuAll').then(() => {
        this.grade.box = true;
        this.tabelObj = row;
        this.grade.check = this.tabelObj.check;
      });
    },
    /**
     * @title 导出excel
     *
     **/
    handleExport () {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['username', 'name'];
        const filterVal = ['username', 'name'];
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel(tHeader, data, this.filename);
      });
    },
    /**
     * @title 导出图片
     *
     **/
    handleJpeg () {
      let table = this.$refs.crud.$el;
      html2canvas(table).then(canvas => {
        var url = canvas.toDataURL();
        let a = document.createElement('a');
        a.href = url;
        a.download = '未命名';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        }),
      );
    },
    /**
     * @title 页面改变值
     *
     **/
    handleCurrentChange (val) {
      this.tablePage = val;
      this.handleList();
    },
    /**
     * @title 搜索按钮回掉
     *
     **/
    handleSearchChange (form) {
      this.tableSearch = form;
      this.$notify({
        showClose: true,
        message: JSON.stringify(this.tableSearch),
        type: 'success',
      });
      this.handleList(this.tableSearch);
    },
    /**
     * @title 选中第几行
     * @param row 选中那几行数据
     * @detail 调用crud的toggleSelection方法即可
     *
     **/
    toggleSelection (row) {
      this.$refs.crud.toggleSelection(row);
    },
    /**
     * @title 获取数据
     * @detail 赋值为tableData表格即可
     *
     **/
    handleList (form) {
      this.tableLoading = true;
      getTableData(Object.assign({}, form, { page: `${this.tablePage}` }))
        .then(res => {
          const data = res.data.data;
          setTimeout(() => {
            this.tableData = data.tableData;
            this.page.total = data.total;
            this.page.currentPage = this.tablePage;
            this.page.pageSize = data.pageSize;
            this.tableLoading = false;
          }, 1000);
        });
    },
    /**
     * @title 当前选中的数据
     * @param val 选中的值
     *
     **/
    handleSelectionChange (val) {
      this.tableRow = val;
      this.$notify({
        showClose: true,
        message: JSON.stringify(val),
        type: 'success',
      });
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row, done) {
      this.tableData.push(Object.assign({}, row));
      done();
      setTimeout(() => {
        this.$notify({
          showClose: true,
          message: '添加成功',
          type: 'success',
        });
      });
    },
    /**
     * @title 行双击
     * @param row 为当前的数据
     * @param event 事件
     *
     **/
    handleRowDBLClick (row, event) {
      console.log(row, event);
      this.$notify({
        showClose: true,
        message: '双击' + row,
        type: 'success',
      });
    },

    /**
     * @title 行单机
     * @param row 为当前的数据
     * @param event 事件
     * @param column 列
     *
     **/
    handleRowClick (row, event, column) {
      console.log(row, event, column)
      this.$notify({
        showClose: true,
        message: '单机',
        type: 'success',
      });
    },
    handleRowDel () {
      if (validatenull(this.tableRow)) {
        this.$notify({
          showClose: true,
          message: '请选择一行要删除的数据',
          type: 'error',
        });
        return false;
      } else if (this.tableRow.length > 1) {
        this.$notify({
          showClose: true,
          message: '请选择一行数据，不要选择多行',
          type: 'error',
        });
        return false;
      }
      this.handleDel(this.tableRow[0], -1);
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除序号为${row.name}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$notify({
            showClose: true,
            message: '删除成功',
            type: 'success',
          });
        })
        .catch(() => { });
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate (row, index, done) {
      this.tableData.splice(index, 1, Object.assign({}, row));
      done();
      setTimeout(() => {
        this.$notify({
          showClose: true,
          message: '修改成功',
          type: 'success',
        });
      });
    },
    /**
     * @title 表单关闭前处理
     * @param done
     *
     **/
    boxhandleClose (done) {
      this.$notify({
        showClose: true,
        message: '表单关闭前处理事件',
        type: 'success',
      });
      done();
    },
    boxhandleOpen (show) {
      this.$notify({
        showClose: true,
        message: '表单打开前处理事件',
        type: 'success',
      });
      show();
    },
  },
};
</script>

<style lang="scss">
.table-container {
  padding: 8px 10px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

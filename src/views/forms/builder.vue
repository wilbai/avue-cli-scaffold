<template>
  <div class="builder-contial">
    <basic-container class="header">
      <el-button-group>
        <el-button type="primary"
                   @click="statusFlag=!statusFlag">{{statusFlag?'预览表单':'关闭预览'}}</el-button>
        <el-button type="primary"
                   v-clipboard:copy="resultOption"
                   v-clipboard:success="onCopy"
                   v-clipboard:error="onError">复制代码</el-button>
      </el-button-group>
    </basic-container>
    <div class="weaper">
      <transition name="el-zoom-in-center">
        <basic-container class="status"
                         v-show="statusFlag">
          <avue-form :option="option"
                     v-model="obj">
          </avue-form>
        </basic-container>
      </transition>
      <transition name="el-zoom-in-center">
        <basic-container class="result">
          <draggable :list="column1"
                     :options="dragOptions2">
            <avue-form :option="resultOption"
                       v-model="form"
                       @option-delete="optionDelete"
                       @option-menu="optionMenu"> </avue-form>
          </draggable>
        </basic-container>
      </transition>
    </div>
    <el-dialog :visible.sync="box"
               append-to-body
               title="设置">
      <avue-form v-model="columnObj"
                 :option="columnOption"
                 @submit="submit">
        <template slot="dicData">
          <el-input v-model="dicData"
                    type="textarea"
                    :autosize="{ minRows: 5, maxRows: 10}"
                    placeholder="请输入字典名称"></el-input>
        </template>
      </avue-form>
    </el-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { getList } from "@/const/table/tableGenerator";
import option from '@/const/forms/builderOption'
export default {
  components: {
    draggable
  },
  data () {
    return {
      statusFlag: true,
      option: option,
      obj: {},
      columnObj: {},
      columnIndex: -1,
      box: false,
      form: {},
      column1: [{
        label: '测试字段',
        prop: 'username',
        span: 24
      }],
      columnOption: {
        labelWidth: 110,
        column: getList('builder')
      }
    }
  },
  computed: {
    dicData: {
      get: function () {
        return JSON.stringify(this.columnObj.dicData, null, 2);
      },
      set: function (newValue) {
        this.columnObj.dicData = JSON.parse(newValue);
      }
    },
    resultOption () {
      return {
        labelWidth: 110,
        submitBtn: false,
        draggable: {
          start: true,
          menu: true,
          sort: true,
          clone: false,
        },
        column: this.column1
      }
    },
    // 拖拽表单2
    dragOptions2 () {
      return {
        animation: 0,
        ghostClass: "avue-ghost",
        group: {
          put: ["avue"],
        }
      };
    }
  },
  methods: {
    optionDelete ({ index }) {
      this.column1.splice(index, 1);
    },
    optionMenu ({ column, index }) {
      this.columnObj = Object.assign({}, column);
      this.columnIndex = index;
      this.box = true;
    },
    onCopy () {
      this.$message.success(`复制成功${JSON.stringify(this.resultOption)}`)
    },
    onError (e) {
      this.$message.error(`复制失败${e}`)
    },
    submit () {
      this.column1[this.columnIndex] = Object.assign({}, this.columnObj);
      this.column1.splice(0, 0);
      this.box = false;
    }
  }
}
</script>

<style lang="scss">
.builder-contial {
  .weaper {
    display: flex;
    align-items: flex-start;
    .status,
    .result {
      flex: 1;
    }
  }
  .result,
  .status {
    .from {
      .el-row {
        height: 500px;
        overflow-y: scroll;
      }
    }
  }
}
</style>

<template>
  <div class="builder-contial">
    <basic-container class="header">
      <el-button-group>
        <el-button type="primary"
                   @click="exportBox=true">导入JSON(表格格式)</el-button>
        <el-button type="primary"
                   @click="statusFlag=!statusFlag">{{statusFlag?'预览表单':'关闭预览'}}</el-button>
        <el-button type="primary"
                   v-clipboard:copy="resultOption"
                   v-clipboard:success="onCopy"
                   v-clipboard:error="onError">复制代码</el-button>
        <el-button type="primary"
                   @click="column1=[]">清空表单</el-button>
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
    <el-dialog :visible.sync="exportBox"
               append-to-body
               title="导入JSON(只导入column中数组对象的内容)">
      <el-input type="textarea"
                v-model="exportText"
                rows="20"></el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="exportSubmit">导入</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="box"
               append-to-body
               title="设置"
               class="builder-dialog">
      <div class="dialog-body">
        <avue-form v-model="columnObj"
                   :option="columnOption"
                   @submit="submit">
          <template slot="default">
            <el-form class="dialog-default"
                     label-width="100px">
              <el-col :span="12"
                      v-if="['radio','checkbox'].includes(columnObj.type)">
                <el-form-item class="item"
                              label="边框">
                  <avue-crud-radio v-model="columnObj.border"
                                   :dic="DIC.VAILDATA"></avue-crud-radio>
                </el-form-item>
              </el-col>
              <el-col :span="12"
                      v-if="dateDic.includes(columnObj.type)">
                <el-form-item class="item"
                              label="时间格式">
                  <avue-crud-input v-model="columnObj.format"></avue-crud-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"
                      v-if="dateDic.includes(columnObj.type)">
                <el-form-item class="item"
                              label="时间真实格式">
                  <avue-crud-input v-model="columnObj.valueFormat"></avue-crud-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"
                      v-if="['number'].includes(columnObj.type)">
                <el-form-item class="item"
                              label="精度">
                  <avue-crud-input v-model="columnObj.precision"></avue-crud-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"
                      v-if="['select','tree'].includes(columnObj.type)">
                <el-form-item class="item"
                              label="多选">
                  <avue-crud-radio v-model="columnObj.multiple"
                                   :dic="DIC.VAILDATA"></avue-crud-radio>
                </el-form-item>
              </el-col>

              <el-col :span="12"
                      v-if="['textarea'].includes(columnObj.type)">
                <el-form-item class="item"
                              label="最大行">
                  <avue-crud-input v-model="columnObj.maxRows"></avue-crud-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"
                      v-if="['textarea'].includes(columnObj.type)">
                <el-form-item class="item"
                              label="最小行">
                  <avue-crud-input v-model="columnObj.minRows"></avue-crud-input>
                </el-form-item>
              </el-col>
              <el-col :span="24"
                      v-if="selectDic.includes(columnObj.type)">
                <el-form-item class="item"
                              label="字典">
                  <div class="tags">
                    <el-tag v-for="(tag,index) in dicData"
                            :key="index">
                      {{tag.label}}
                    </el-tag>
                  </div>
                  <el-radio-group v-model.number="dicRadio">
                    <el-radio :label="0">选项</el-radio>
                    <el-radio :label="1">文本</el-radio>
                  </el-radio-group>
                  <el-form v-if="dicRadio===0"
                           class="dialog-dicData">
                    <el-button type="primary"
                               @click="dicAdd"
                               size="small"
                               style="margin-bottom:15px">新增域名</el-button>
                    <el-form-item v-for="(item, index) in dicData"
                                  :key="index"
                                  class="item">
                      <avue-crud-input v-model="item.label"
                                       placeholder="输入字典的label"></avue-crud-input>
                      <avue-crud-input v-model="item.value"
                                       placeholder="输入字典的value"></avue-crud-input>
                      <el-button @click.prevent="dicRemove(index)">删除</el-button>
                    </el-form-item>
                  </el-form>
                  <template v-else-if="dicRadio===1">
                    <div>
                      <el-button type="primary"
                                 @click="dicExport"
                                 size="small"
                                 style="margin-bottom:15px">导入</el-button>
                      <el-input v-model="dicText"
                                type="textarea"
                                :autosize="{ minRows: 5, maxRows: 10}"
                                placeholder="请输入字典名称"></el-input>
                    </div>
                  </template>
                </el-form-item>
              </el-col>
            </el-form>
          </template>
        </avue-form>
      </div>

    </el-dialog>
  </div>
</template>

<script>

function iGetInnerText (testStr) {
  var resultStr = testStr.replace(/ +/g, ""); //去掉空格
  resultStr = testStr.replace(/[ ]/g, "");    //去掉空格
  resultStr = testStr.replace(/[\r\n]/g, ""); //去掉回车换行
  return resultStr;
}
import { DIC } from '@/const/dic'
import draggable from "vuedraggable";
import { getList } from "@/const/table/tableGenerator";
import { validatenull } from '@/util/validate';
import option from '@/const/forms/builderOption'
export default {
  components: {
    draggable
  },
  data () {
    return {
      DIC: DIC,
      statusFlag: true,
      option: option,
      obj: {},
      columnObj: {},
      columnIndex: -1,
      dicRadio: 0,
      dicText: '',
      exportBox: false,
      exportText: '',
      box: false,
      form: {},
      selectDic: ['select', 'radio', 'checkbox', 'tree', 'switch'],
      dateDic: ['week', 'month', 'year', 'dates', 'date', 'datetime', 'time', 'daterange', 'datetimerange', 'timerange'],
      column1: [],
      dicData: [],
      columnOption: {
        labelWidth: 110,
        column: getList('builder')
      }
    }
  },
  computed: {
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
  created () {
    this.init();
  },
  methods: {
    exportSubmit () {
      this.column1 = eval('(' + iGetInnerText(this.exportText) + ')');
      this.exportText = '';
      this.$message.success('导入成功');
      this.exportBox = false;
    },
    dicExport () {
      this.dicData = eval('(' + iGetInnerText(this.dicText) + ')');
      this.dicText = '';
      this.dicRadio = 0;
      this.$message.success('导入成功');
    },
    dicAdd () {
      if (validatenull(this.dicData)) this.dicData = [];
      this.dicData.push({ label: '', value: '' })
    },
    dicRemove (index) {
      this.dicData.splice(index, 1);
    },
    init () {
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      //测试导入代码
      this.exportText = JSON.stringify([{ label: '用户名', prop: 'username' }, { label: '密码', prop: 'password' }], null, 2)
    },
    optionDelete ({ index }) {
      this.column1.splice(index, 1);
    },
    optionMenu ({ column, index }) {
      this.columnObj = Object.assign({}, column);
      this.dicData = Object.assign([], column.dicData);
      this.columnIndex = index;
      this.box = true;
    },
    onCopy () {
      this.$message.success(`已成功复制到剪切板中`)
    },
    onError (e) {
      this.$message.error(`复制失败${e}`)
    },
    submit () {
      this.column1[this.columnIndex] = Object.assign({}, this.columnObj);
      this.column1[this.columnIndex].dicData = Object.assign([], this.dicData);
      this.column1.splice(0, 0);
      this.box = false;
    }
  }
}
</script>

<style lang="scss">
.builder-dialog {
  .tags {
    margin-bottom: 10px;
    .el-tag + .el-tag {
      margin-left: 10px;
    }
  }
  .dialog-body {
    height: 100%;
    overflow-y: scroll;
  }
  .dialog-default {
    height: auto;
    overflow: hidden;
    .item {
      margin-bottom: 10px;
    }
  }
  .dialog-dicData {
    width: 100%;
    .item {
      margin-bottom: 10px;
      .el-form-item__content {
        display: flex;
        align-items: center;
        & > div {
          margin-right: 10px;
        }
      }
    }
  }
}
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
        > div {
          height: 500px;
        }
      }
    }
  }
}
</style>

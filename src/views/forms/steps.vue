<template>
  <div>
    <basic-container>
      <el-button-group>
        <el-button type="primary"
                   @click="model1">横向</el-button>
        <el-button type="primary"
                   @click="model2">纵向 </el-button>
        <el-button type="primary"
                   @click="model3">简约 </el-button>
      </el-button-group>
    </basic-container>
    <basic-container>
      <avue-steps :option="option"
                  ref="formSteps"
                  v-model="form"
                  @change="handleChange"
                  @submit="handleSubmit">
        <div slot="before"
             class="content">
          <div v-if="type==='pwd'">
            <el-tag class="avue-tip"
                    style="margin-bottom:20px;">
              <i class="el-icon-info">&nbsp;</i>
              <span class="name">确认转账后，资金将直接打入对方账户，无法退回。</span>
            </el-tag>
            <el-form class="form">
              <el-form-item label="付款账户">
                <span v-text="info.username"></span>
              </el-form-item>
              <el-form-item label="收款账户">
                <span v-text="info.acount"></span>
              </el-form-item>
              <el-form-item label="转账金额">
                <h2 v-text="info.money"></h2>
              </el-form-item>
            </el-form>
          </div>
          <div v-if="type==='finsh'">
            <el-tag class="avue-tip"
                    style="margin-bottom:20px;"
                    type="success">转账成功</el-tag>
            <el-form class="form bg">
              <el-form-item label="付款账户">
                <span v-text="info.username"></span>
              </el-form-item>
              <el-form-item label="收款账户">
                <span v-text="info.acount"></span>
              </el-form-item>
              <el-form-item label="转账金额">
                <h2 v-text="info.money"></h2>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div slot="after">
        </div>
        <template slot="menuForm">
          <el-button @click="agan"
                     v-if="type=='finsh'">再来一单</el-button>
        </template>
      </avue-steps>
    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/forms/stepsOption'
export default {
  data () {
    return {
      option: option,
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-tabs-option',
        modifiable: false
      },
      type: 'info',
      form: {

      },
      info: {

      },
      obj: {
        info: {
          username: 'smallwei@qq.com',
          type: '1',
          acount: 'smallwei',
          money: '500',
        },
        pwd: {
          password: '123456',
        }
      }
    }
  },
  created () {
    this.handleWitch();
  },
  methods: {
    model1 () {
      this.option.direction = undefined;
      this.option.simple = false;
      this.option.space = undefined;
    },
    model2 () {
      this.option.direction = 'vertical'
      this.option.simple = false;
      this.option.space = 100;
    },
    model3 () {
      this.option.direction = undefined
      this.option.space = undefined;
      this.option.simple = true;
    },
    agan () {
      this.$refs.formSteps.reset();
    },
    handleChange (item) {
      this.type = item.prop;
      this.handleWitch();
    },
    handleWitch () {
      this.form = this.obj[this.type];
    },
    handleSubmit (form, next) {
      const submit = () => {
        next();
        this.$message({
          message: this.form,
          type: "success"
        });
      }
      this[this.type] = Object.assign({}, form);
      if (this.type == 'pwd') {
        const loading = this.$loading({
          lock: true,
          text: '正在转账，请稍后',
          spinner: 'el-icon-loading',
        });
        setTimeout(() => {
          loading.close();
          submit();
        }, 1000);
      } else {
        submit();
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.content {
  width: 40%;
  margin: 0 auto;
  padding: 20px 0;
  .menu {
    display: flex;
    justify-content: center;
  }
}
.form {
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 5px;
  padding: 20px;
  .el-form-item {
    margin-bottom: 5px;
  }
  &.bg {
    border-bottom: none;
    background: #fdfdfd;
  }
}
</style>

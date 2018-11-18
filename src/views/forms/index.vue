<template>
  <div>
    <basic-container>
      <el-tag>本页面在meta里配置keepAlive缓冲，关闭本标签缓冲失效</el-tag>
    </basic-container>
    <basic-container>
      <avue-form ref="form"
                 v-model="formData"
                 :option="formOption"
                 @reset-change="emptytChange"
                 @submit="submit">
        <template slot-scope="scope"
                  slot="menuForm">
          <el-button @click="tip">自定义按钮</el-button>
        </template>
      </avue-form>
    </basic-container>
    <basic-container>
      <tree-view :data="formOption"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formOption from "@/const/forms/formOption";
export default {
  name: "froms",
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-option',
        modifiable: false
      },
      formJson: "",
      formOption: formOption,
      formData: {},
    };
  },
  watch: {},
  created () {
    this.formData.username = 'smallwei'
    this.formData.switch = 0;
    this.formData.phone = '17547400800';
  },
  computed: {
    ...mapGetters(["permission"])
  },
  props: [],
  methods: {
    emptytChange () {
      this.$message.success('清空方法回调');
    },
    submit () {
      this.$message.success('当前数据' + JSON.stringify(this.formData));
    },
    tip () {
      this.$message.success('自定义按钮');
    }
  }
};
</script>

<style lang="scss" scoped>
.from-container {
  padding: 8px 10px;
}
</style>

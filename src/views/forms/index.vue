<template>
  <div>
    <basic-container>
      <avue-form :option="formOption"
                 v-model="formData"
                 @submit="handleSubmit">
        <template slot-scope="scope"
                  slot="name">
          <avue-crud-input @click.native="tip"
                           :disabled="scope.column.disabled"
                           v-model="formData.name">
          </avue-crud-input>
        </template>
        <template slot="menuForm">
          <el-button @click="tip('我是自定义按钮')">我是自定义按钮</el-button>
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
  created () {

  },
  watch: {},
  mounted () {
    this.formData = {
      name: "smallwei",
      sex: 0,
      type: 0,
      grade: [0, 1]
    }
    this.formData.username = "smallwei";
  },
  computed: {
    ...mapGetters(["permission"])
  },
  props: [],
  methods: {
    tip (msg) {
      this.$message({
        message: msg || "点击事件"
      });
    },
    handleSubmit () {
      this.$message({
        message: this.formData,
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.from-container {
  padding: 8px 10px;
}
</style>

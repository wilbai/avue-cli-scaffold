<template>
  <div>
    <basic-container>
      <avue-form :option="formOption"
                 v-model="formData"
                 @submit="handleSubmit">
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
import formOption from "@/const/forms/dateOption";
export default {
  name: "froms",
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-date-option',
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
  },
  computed: {
    ...mapGetters(["permission"])
  },
  props: [],
  methods: {
    tip () {
      this.$message({
        message: "点击事件"
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

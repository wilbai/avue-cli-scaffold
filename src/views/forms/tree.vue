<template>
  <div>
    <basic-container>
      <avue-form :option="option"
                 v-model="form"
                 @submit="handleSubmit"></avue-form>
    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/forms/treeOption'
export default {
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-select-option',
        modifiable: false
      },
      option: option,
      form: {
        shenfeng1: "tag",
        shenfeng: ["tag", "progress", "tree", "axure", "sketch", "jiaohu"]
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleSubmit () {
      this.$message({
        message: this.form,
        type: "success"
      });
    }
  }
}
</script>

<style>
</style>

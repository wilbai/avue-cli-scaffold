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
import option from '@/const/forms/selectOption'
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
        name: 'smallwei',
        province: "110000",
        city: "110100",
        area: "110101"
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

    handleSubmit (form) {
      this.form = form;
      this.$message({
        message: form,
        type: "success"
      });
    }
  }
}
</script>

<style>
</style>

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
import option from '@/const/forms/rateOption'
export default {
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-rate-option',
        modifiable: false
      },
      option: option,
      form: {
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

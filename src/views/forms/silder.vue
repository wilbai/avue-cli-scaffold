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
import option from '@/const/forms/silderOption'
export default {
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-silder-option',
        modifiable: false
      },
      option: option,
      form: {
        pt: 20,
        ptwf: [3, 8]
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

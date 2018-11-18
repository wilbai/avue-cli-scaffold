<template>
  <div>
    <basic-container>
      <avue-form :option="option"
                 v-model="form"
                 @submit="handleSubmit"
                 :upload-before="uploadBefore"
                 :upload-after="uploadAfter"></avue-form>
    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/forms/uploadOption'
export default {
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-upload-option',
        modifiable: false
      },
      option: option,
      form: {
        img: [
          'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?a=1',
          'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?a=2'
        ],
        imgUrl: [{
          label: '图片名称',
          value: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?a=1'
        }, {
          label: '图片名称',
          value: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?a=2'
        }],
        imgUrl3: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?a=3'
      },
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    uploadBefore (file, done) {
      console.log(file);
      done();
      this.$message.success('上传前的方法')
    },
    uploadAfter (error, done) {
      console.log(error);
      done();
      this.$message.success('上传后的方法')
    },
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

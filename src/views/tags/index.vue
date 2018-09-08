<template>
  <basic-container>
    <el-button type="primary"
               @click="$router.$avueRouter.closeTag()">关闭本标签</el-button>
    <el-button type="primary"
               @click="$router.$avueRouter.closeTag('/wel/index')">关闭其他标签（首页）</el-button>

  </basic-container>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
</style>

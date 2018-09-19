<template>
  <basic-container>
    <el-row :span="24"
            class="btn-list">
      <el-col :md="3"
              :xs="8"
              :sm="6"
              class="item">
        <el-button type="primary"
                   @click="$router.$avueRouter.closeTag()">关闭本标签</el-button>
      </el-col>
      <el-col :md="3"
              :xs="8"
              :sm="6"
              class="item">
        <el-button type="primary"
                   @click="$router.$avueRouter.closeTag('/wel/index')">关闭其他标签（首页）</el-button>
      </el-col>
    </el-row>

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

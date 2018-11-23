<template>
  <el-popover placement="bottom"
              width="400"
              trigger="hover">
    <avue-crud :data="data"
               :option="option"></avue-crud>
    <router-link class="top-mag__menu"
                 :to="{path:'/info/message'}">
      <el-button type="text"
                 size="mini">查看全部</el-button>
    </router-link>
    <div slot="reference"
         class="top-bar__item top-bar__item--show">
      <el-badge is-dot>
        <i class=" el-icon-bell"></i>
      </el-badge>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: "top-mag",
  data () {
    return {
      data: [
        {
          title: '你好新朋友，感谢使用 avue-cli',
          date: '2018-11-23'
        }, {
          title: 'smallwei发来一条私信',
          date: '2018-11-23'
        }],
      option: {
        size: 'mini',
        addBtn: false,
        page: false,
        menu: false,
        header: false,
        column: [{
          width: 200,
          label: '标题内容',
          prop: 'title',
          overHidden: true,
        }, {
          label: '时间',
          prop: 'date'
        }]
      }
    }
  }

}
</script>

<style lang="scss">
.top-mag {
  &__menu {
    float: right;
  }
}
</style>

<template>
  <div class="avue-sidebar">
    <logo></logo>
    <el-scrollbar style="height:100%">
      <div v-if="validatenull(menu)"
           class="avue-sidebar--tip">没有发现菜单</div>
      <el-menu unique-opened
               :default-active="nowTagValue"
               mode="vertical"
               :show-timeout="200"
               background-color="#20222a"
               text-color="rgba(255,255,255,0.7)"
               :collapse="keyCollapse">
        <sidebar-item :menu="menu"
                      first
                      :screen="screen"
                      :props="website.menu.props"
                      :collapse="keyCollapse"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '../logo';
import sidebarItem from './sidebarItem'
export default {
  name: 'sidebar',
  components: { sidebarItem, logo },
  inject: ["index"],
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['website', 'menu', 'tag', 'keyCollapse', 'screen', 'menuId']),
    nowTagValue: function () { return this.$router.$avueRouter.getValue(this.$route) }
  },
  created () {
    this.index.openMenu(this.menuId)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>


<template>
  <div class="sidebar-container">
    <logo></logo>
    <el-menu unique-opened
             :default-active="nowTagValue"
             mode="vertical"
             :show-timeout="200"
             background-color="#20222a"
             text-color="rgba(255,255,255,0.7)"
             :collapse="isCollapse">
      <sidebar-item :menu="menu"
                    :isCollapse="isCollapse"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '../logo';
import SidebarItem from './sidebarItem'
export default {
  name: 'sidebar',
  components: { SidebarItem, logo },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('GetMenu')
  },
  computed: {
    ...mapGetters(['menu', 'tag', 'isCollapse']),
    nowTagValue: function () { return this.$router.$avueRouter.getValue(this.$route) }
  },
  mounted () { },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>


<template>
  <div class="sidebar-container"
       :class="{'is-active':isCollapse}">
    <el-menu unique-opened
             :default-active="nowTagValue"
             mode="vertical"
             :show-timeout="200"
             background-color="#fff"
             text-color="#666"
             :collapse="isCollapse">
      <sidebar-item :menu="menu"
                    :isCollapse="isCollapse"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebarItem'
export default {
  name: 'sidebar',
  components: { SidebarItem },
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


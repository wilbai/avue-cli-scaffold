<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in menu">
      <el-menu-item v-if="validatenull(item[childrenKey])"
                    :index="filterPath(item[pathKey],index)"
                    @click="open(item)"
                    :key="item[labelKey]">
        <i :class="item[iconKey]"></i>
        <span slot="title">{{item[labelKey]}}</span>
      </el-menu-item>
      <el-submenu v-else
                  :index="filterPath(item[labelKey],index)"
                  :key="item[labelKey]">
        <template slot="title">
          <i :class="item[iconKey]"></i>
          <span slot="title"
                :class="{'el-menu--display':collapse}">{{item[labelKey]}}</span>
        </template>
        <template v-for="(child,cindex) in item[childrenKey]">
          <el-menu-item :class="{'siderbar-active':nowTagValue==child[pathKey]}"
                        :index="filterPath(child[pathKey],cindex)"
                        @click="open(child)"
                        v-if="validatenull(child[childrenKey])"
                        :key="child[labelKey]">
            <i :class="child[iconKey]"></i>
            <span slot="title">{{child[labelKey]}}</span>
          </el-menu-item>
          <sidebar-item v-else
                        :menu="child"
                        :key="cindex"
                        :props="props"
                        :screen="screen"
                        :collapse="collapse"></sidebar-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import { validatenull } from '@/util/validate';
import config from './config.js'
export default {
  name: 'sidebarItem',
  data () {
    return {
      config: config
    }
  },
  props: {
    menu: {
      type: Array
    },
    screen: {
      type: Number
    },
    props: {
      type: Object,
      default: () => { return {} }
    },
    collapse: {
      type: Boolean
    }
  },
  created () {
  },
  mounted () { },
  computed: {
    labelKey () { return this.props.label || this.config.propsDefault.label },
    pathKey () { return this.props.path || this.config.propsDefault.path },
    iconKey () { return this.props.icon || this.config.propsDefault.icon },
    childrenKey () { return this.props.children || this.config.propsDefault.children },
    nowTagValue () { return this.$router.$avueRouter.getValue(this.$route) }
  },
  methods: {
    validatenull (val) {
      return validatenull(val);
    },
    filterPath (path, index) {
      return path == null ? index + '' : path
    },
    open (item) {
      if (this.screen <= 1) this.$store.commit("SET_COLLAPSE");
      this.$router.push({
        path: this.$router.$avueRouter.getPath({
          name: item[this.labelKey],
          src: item[this.pathKey]
        }),
        query: item.query
      })
    }
  }
}
</script>
<style lang="scss" scoped>
//刷新激活状态
.siderbar-active {
  i,
  span {
    color: #409eff;
  }
}
</style>


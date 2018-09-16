<template>
  <el-container class="avue-contail"
                :class="{'avue--collapse':isCollapse}">
    <el-header height="auto"
               class="avue-header">
      <!-- 顶部导航栏 -->
      <top class="avue-top" />
    </el-header>

    <el-container class="avue-layout">
      <el-aside class="avue-left">
        <!-- 左侧导航栏 -->
        <el-scrollbar style="height:100%">
          <sidebar class="avue-sidebar"></sidebar>
        </el-scrollbar>
      </el-aside>
      <el-main class="avue-main">
        <!-- 顶部标签卡 -->
        <tags />
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view class="avue-view"
                         v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view class="avue-view"
                       v-if="!$route.meta.keepAlive" />
        </el-scrollbar>
      </el-main>
    </el-container>
    <!-- <el-footer class="avue-footer">
      <img src="/svg/logo.svg"
           alt=""
           class="logo">
      <p class="copyright">© 2018 Avue designed by smallwei</p>
    </el-footer> -->
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import tags from './tags'
import top from './top/'
import sidebar from './sidebar/'
import { validatenull } from '@/util/validate';
import { calcDate } from '@/util/date.js';
import { getStore } from '@/util/store.js';
export default {
  components: {
    top,
    tags,
    sidebar
  },
  name: 'index',
  data () {
    return {
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: '',
    }
  },
  created () {
    //实时检测刷新token
    // this.refreshToken();
  },
  mounted () { },
  computed: mapGetters(['isLock', 'isCollapse', 'website']),
  props: [],
  methods: {
    // 实时检测刷新token
    refreshToken () {
      this.refreshTime = setInterval(() => {
        const token = getStore({
          name: 'token',
          debug: true,
        });
        const date = calcDate(token.datetime, new Date().getTime());
        if (validatenull(date)) return;
        if (!(date.seconds >= this.website.tokenTime) && !this.refreshLock) {
          this.refreshLock = true;
          this.$store
            .dispatch('RefeshToken')
            .then(() => {
              clearInterval(this.refreshTime);
            })
            .catch(() => {
              this.refreshLock = false;
            });
        }
      }, 3000);
    },
  }
}
</script>

<style lang="scss">
.avue-contail {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  background-size: 100%;
  background-repeat: no-repeat;
}
.avue-layout,
.avue-top {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 auto;
}
.avue-left {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px !important;
  height: 100%;
  z-index: 1024;
}
.avue--collapse {
  .avue-left,
  .avue-logo {
    width: 60px !important;
  }
  .avue-header {
    padding-left: 60px;
  }
  .avue-main {
    width: calc(100% - 60px);
    left: 60px;
  }
}
.avue-header {
  padding: 0;
  padding-left: 230px;
  width: 100%;
  background-color: #fff;
}
.avue-main {
  position: absolute;
  left: 220px;
  padding: 0;
  width: calc(100% - 220px);
  height: calc(100% - 8px);
  box-sizing: border-box;
  overflow: hidden;
}
.avue-view {
  padding-bottom: 22px;
  width: 100%;
  box-sizing: border-box;
}
.avue-footer {
  margin: 0 auto;
  padding: 0 22px;
  width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: -50px;
  }
  .copyright {
    color: #666;
    line-height: 1.5;
    font-size: 12px;
  }
}
</style>
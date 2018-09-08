<template>
  <el-container class="avue-contail">
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

<style lang="scss" scoped>
.avue-contail {
  width: 100%;
  height: 100%;
  background-color: #eceef3;
  background-size: 100%;
  background-repeat: no-repeat;
}
.avue-layout,
.avue-top {
  width: 92%;
  height: 100%;
  margin: 0 auto;
}
.avue-left {
  width: 220px !important;
}
.avue-sidebar {
  height: 100%;
}
.avue-header {
  background: #fff;
  width: 100%;
  box-shadow: 3px 0 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}
.avue-main {
  padding: 0;
  position: relative;
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
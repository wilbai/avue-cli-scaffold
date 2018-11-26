<template>
  <div class="avue-tags"
       v-if="showTag">
    <!-- tag盒子 -->
    <div class="avue-tags__box"
         :class="{'avue-tags__box--close':!website.isFirstPage}">
      <el-tabs v-model="active"
               type="card"
               :closable="tagLen!==1"
               @tab-click="openTag"
               @edit="menuTag">
        <el-tab-pane :key="item.value"
                     v-for="item in tagList"
                     :label="item.label"
                     :name="item.value">
        </el-tab-pane>
      </el-tabs>
      <el-dropdown class="avue-tags__menu">
        <el-button type="primary"
                   size="mini">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="closeOthersTags">关闭其他</el-dropdown-item>
          <el-dropdown-item @click.native="closeAllTags">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'tags',
  data () {
    return {
      active: '',
    }
  },
  created () { },
  mounted () {
    this.setActive();
  },
  watch: {
    tag () {
      this.setActive();
    }
  },
  computed: {
    ...mapGetters(['tagWel', 'tagList', 'tag', 'website']),
    ...mapState({
      showTag: state => state.common.showTag,
    }),
    tagLen () {
      return this.tagList.length || 0;
    }
  },
  methods: {
    //激活当前选项
    setActive () {
      this.active = this.tag.value;
    },
    menuTag (value, action) {
      if (action === 'remove') {
        let { tag, key } = this.findTag(value);
        this.$store.commit('DEL_TAG', tag)
        if (tag.value === this.tag.value) {
          tag = this.tagList[key === 0 ? key : key - 1] //如果关闭本标签让前推一个
          this.openTag(tag)
        }
      }
    },
    openTag (item) {
      let tag;
      if (item.name) {
        tag = this.findTag(item.name).tag;
      } else {
        tag = item;
      }
      this.$router.push({
        path: this.$router.$avueRouter.getPath({
          name: tag.label,
          src: tag.value
        }),
        query: tag.query
      })
    },
    closeOthersTags () {
      this.$store.commit('DEL_TAG_OTHER')
    },
    findTag (value) {
      let tag, key;
      this.tagList.map((item, index) => {
        if (item.value === value) {
          tag = item;
          key = index;
        }
      });
      return { tag: tag, key: key };
    },
    closeAllTags () {
      this.$store.commit('DEL_ALL_TAG')
      this.$router.push({
        path: this.$router.$avueRouter.getPath({
          src: this.tagWel.value
        }),
        query: this.tagWel.query
      })
    },
  }
}
</script>



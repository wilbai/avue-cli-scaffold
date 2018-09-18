<template>
  <div class="setting">
    <span @click="open">设置</span>
    <el-dialog title="设置"
               append-to-body
               modal-append-to-body
               :visible.sync="box"
               width="50%">

      <div class="setting__content">
        <avue-form v-model="form"
                   :option="option"></avue-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { option, list } from '@/const/setting/'
export default {
  data () {
    return {
      box: true,
      form: {},
      list: list,
      option: option(this)
    }
  },
  computed: {
    ...mapState({
      showTag: state => state.common.showTag,
      showDebug: state => state.common.showDebug,
      showLock: state => state.common.showLock,
      showColor: state => state.common.showColor,
      showFullScren: state => state.common.showFullScren,
      showCollapse: state => state.common.showCollapse,
      showSearch: state => state.common.showSearch,
      showMenu: state => state.common.showMenu
    })
  },
  created () {
    this.init();
  },
  methods: {
    set (key) {
      const ele = this.find(key);
      this.$store.commit(ele.commit, eval(this.form[ele.key]));
    },
    find (key) {
      return this.list.filter(ele => ele.key === key)[0]
    },
    init () {
      this.list.forEach(ele => {
        this.form[ele.key] = this[ele.key] ? this[ele.key] + '' : 'true';
      })
    },
    open () {
      this.box = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  &__content {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>

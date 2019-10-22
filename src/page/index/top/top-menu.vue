<template>
  <div class="top-menu">
    <el-menu :default-active="activeIndex"
             mode="horizontal"
             text-color="#333">
      <template v-for="(item,index) in items">
        <el-menu-item :index="item.parentId+''"
                      @click.native="openMenu(item)"
                      :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top-menu",
  inject: ["index"],
  data () {
    return {
      activeIndex: "0",
      items: []
    };
  },
  created () {
    this.getMenu();
  },
  computed: {
    ...mapGetters(["tagCurrent", "menu"])
  },
  methods: {
    openMenu (item) {
      this.index.openMenu(item)
    },
    getMenu () {
      this.$store.dispatch("GetTopMenu").then(res => {
        this.items = res;
      });
    },
  }
};
</script>
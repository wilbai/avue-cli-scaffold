<template>
  <el-autocomplete class="top-search"
                   popper-class="my-autocomplete"
                   v-model="value"
                   :fetch-suggestions="querySearch"
                   placeholder="请输入搜索内容"
                   @select="handleSelect">

    <template slot-scope="{ item }">
      <i :class="[item.icon,'icon']"></i>
      <div class="name">{{ item.label }}</div>
      <p class="addr">{{ item.value }}</p>
    </template>
  </el-autocomplete>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      value: '',
      menuList: [],
    }
  },
  created () {
    this.getMenuList();
  },

  watch: {
    menu () {
      this.getMenuList();
    }
  },
  computed: {
    ...mapGetters(['menu'])
  },
  methods: {
    getMenuList () {
      const _safe = this;
      function findMenu (list) {
        for (let i = 0; i < list.length; i++) {
          const ele = Object.assign({}, list[i]);
          if (ele.children) findMenu(ele.children);
          delete ele.children;
          _safe.menuList.push({
            label: ele.label,
            icon: ele.icon,
            value: ele.href,
            query: ele.query
          });
        }
      }
      this.menuList = [];
      findMenu(this.menu);
    },
    querySearch (queryString, cb) {
      var restaurants = this.menuList;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.label.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect (item) {
      this.value = '';
      this.$router.push({
        path: this.$router.$avueRouter.getPath({
          name: item.label,
          src: item.value
        }),
        query: item.query
      })
    },
  }

}
</script>

<style lang="scss">
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .icon {
      margin-right: 5px;
      display: inline-block;
      vertical-align: middle;
    }
    .name {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: middle;
    }
    .addr {
      padding-top: 5px;
      width: 100%;
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
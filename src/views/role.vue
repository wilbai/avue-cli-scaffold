<template>
  <div class="pull-chheight role-container">
    <basic-container>
      <p>当前用户的权限值是有权限时(admin) 时，才可以看到下面的个别按钮。</p>
      <el-switch v-model="roleSwitch"
                 active-color="#13ce66"
                 inactive-color="#ff4949"
                 active-value="admin"
                 active-text="有权限(admin)"
                 inactive-value="user"
                 inactive-text="无权限(user)"
                 @change="handlechange">
      </el-switch>
    </basic-container>
    <basic-container>
      <el-row :span="24"
              class="btn-list">
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button v-if="permission.sys_role_btn1">默认按钮</el-button>
        </el-col>
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button type="primary"
                     v-if="permission.sys_role_btn2">主要按钮</el-button>
        </el-col>
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button type="success"
                     v-if="permission.sys_role_btn3">成功按钮</el-button>
        </el-col>
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button type="info"
                     v-if="permission.sys_role_btn4">信息按钮</el-button>
        </el-col>
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button type="warning"
                     v-if="permission.sys_role_btn5">警告按钮</el-button>
        </el-col>
        <el-col :md="2"
                :xs="8"
                :sm="6"
                class="item">
          <el-button type="danger"
                     v-if="permission.sys_role_btn6">危险按钮</el-button>
        </el-col>
      </el-row>
    </basic-container>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "role",
  data () {
    return {
      roleSwitch: ""
    };
  },
  created () {
    this.roleSwitch = this.roles;
  },
  computed: {
    ...mapGetters(["roles", "permission"])
  },
  methods: {
    handlechange (val) {
      this.$store.commit("SET_ROLES", [val]);
      if (val == "user") {
        this.$store.commit("SET_PERMISSION", [
          "sys_role_btn1",
          "sys_role_btn2"
        ]);
      } else if (val == "admin") {
        this.$store.dispatch("GetUserInfo");
      }

      this.$store.dispatch("GetMenu");
    }
  }
};
</script>

<style lang="scss">
.btn-list {
  .item {
    margin: auto 5px auto 5px;
  }
}
@media screen and (max-width: 992px) {
  .btn-list {
    .item {
      margin: 0;
    }
  }
}
</style>
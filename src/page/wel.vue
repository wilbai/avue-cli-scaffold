<template>
  <div>
    <el-row :span="24">
      <el-col :md="7"
              :xs="24"
              :sm="24">
        <basic-container>
          <div class="info">
            <div class="img-border">
              <a href="#">
                <div class="img"><img src="https://gitee.com/uploads/61/632261_smallweigit.jpg"></div>
              </a><img alt="用户等级"
                   src="data:image/png;base64,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"
                   class="img-v"></div>
            <div class="user">
              <div class="user-img">
                <span style="user-title">smallwei</span>
                <div class="user-subtitle">VIP用户</div>
              </div>
              <div class="user-item">绑定机构：Avue后台模版</div>
              <div class="user-item">认证信息：hello 大家好！</div>
            </div>
          </div>
        </basic-container>
      </el-col>
      <el-col :md="17"
              :xs="24"
              :sm="24">
        <basic-container>
          <avue-data-icons :option="easyDataOption2"></avue-data-icons>
        </basic-container>
      </el-col>
    </el-row>
    <basic-container>
      <avue-data-box :option="easyDataOption"></avue-data-box>
    </basic-container>
    <basic-container>
      <avue-crud :data="data"
                 :option="tableOption">
        <template slot-scope="scope"
                  slot="username">
          <el-tag>{{scope.row.username}}</el-tag>
        </template>
        <template slot-scope="scope"
                  slot="stars">
          <a :href='scope.row.git'
             target="_blank">
            <img :src="scope.row.stars"
                 alt='star' />
          </a>
        </template>
        <template slot-scope="scope"
                  slot="address">
          <a :href="scope.row.git"
             target="_blank">{{scope.row.address}}</a>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
export default {
  name: "wel",
  data() {
    return {
      tableOption: {
        border: true,
        index: true,
        expand: true,
        stripe: true,
        selection: true,
        page: false,
        menuBtn: true,
        menuAlign: "center",
        align: "center",
        column: [
          {
            label: "用户名",
            prop: "username",
            width: 120,
            span: 24,
            solt: true,
            sortable: true,
            rules: [
              {
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "类型",
            prop: "type",
            width: 80,
            type: "select",
            sortable: true,
            dicData: [
              {
                label: "前端",
                value: 0
              },
              {
                label: "后端",
                value: 1
              }
            ]
          },
          {
            label: "stars",
            width: "150",
            prop: "stars",
            sortable: true,
            solt: true
          },
          {
            label: "码云",
            solt: true,
            span: 24,
            prop: "address",
            type: "textarea",
            overHidden: true
          },
          {
            label: "项目介绍",
            width: "300",
            prop: "info",
            editDisabled: true,
            formHeight: 200,
            type: "ueditor",
            span: 24,
            overHidden: true
          }
        ]
      },
      data: [
        {
          username: "lengleng",
          name: "lengleng",
          number: 12,
          type: "0",
          stars: "https://gitee.com/log4j/pig/badge/star.svg?theme=white",
          git: "https://gitee.com/log4j/pig",
          address: "https://gitee.com/log4j",
          info:
            "Pig是基于Spring Cloud、OAuth2.0，使用Vue前后分离的开发平台,支持账号、 短信、 SSO等多种登录。 "
        },
        {
          username: "smallwei",
          name: "smallwei",
          number: 20,
          type: "1",
          stars:
            "https://gitee.com/smallweigit/avue/badge/star.svg?theme=white",
          git: "https://gitee.com/smallweigit/avue",
          address: "https://gitee.com/smallweigit",
          info:
            "Avue是一个后台集成解决方案，它基于 Vue.js 和 element。 使用了最新的前端技术栈，支持权限验证，第三方网站嵌套等功能。"
        }
      ],
      easyDataOption2: {
        // color: 'rgb(63, 161, 255)',
        span: 6,
        discount: true,
        data: [
          {
            title: "错误日志",
            icon: "icon-cuowu"
          },
          {
            title: "数据展示",
            icon: "icon-shujuzhanshi2"
          },
          {
            title: "权限管理",
            icon: "icon-jiaoseguanli"
          },
          {
            title: "菜单管理",
            icon: "icon-caidanguanli"
          }
        ]
      },
      easyDataOption: {
        data: [
          {
            title: "错误日志",
            count: 12332,
            icon: "icon-cuowu",
            color: "rgb(49, 180, 141)"
          },
          {
            title: "数据展示",
            count: 33,
            icon: "icon-shujuzhanshi2",
            color: "rgb(56, 161, 242)"
          },
          {
            title: "权限管理",
            count: 2223,
            icon: "icon-jiaoseguanli",
            color: "rgb(117, 56, 199)"
          }
        ]
      }
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.info {
  padding: 12px 0;
  .img-border {
    width: 64px;
    height: 65px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }
  .img-v {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 22px;
    height: 22px;
  }
  .img {
    border-radius: 5px;
    width: 64px;
    height: 64px;
    display: inline-block;
    overflow: hidden;
    img {
      display: block;
      max-width: none;
      height: 64px;
      opacity: 1;
      width: 64px;
      margin-left: 0px;
      margin-top: 0px;
    }
  }
  .user {
    margin-left: 20px;
    display: inline-block;
    color: rgb(153, 153, 153);
    vertical-align: middle;
  }
  .user-title {
    font-size: 18px;
    color: rgb(102, 102, 102);
    margin-right: 5px;
    display: inline-block;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .user-subtitle {
    display: inline-block;
    width: 40px;
    height: 16px;
    line-height: 16px;
    border-radius: 2px;
    padding: 0px 5px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    color: rgb(255, 44, 84);
    background-color: rgb(255, 242, 244);
    white-space: nowrap;
  }
  .user-item {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>

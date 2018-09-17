<template>
  <div class="exhibition-contailer">
    <basic-container>
      <h4>数据展示</h4>
      <avue-data-display :option="option"></avue-data-display>
    </basic-container>
    <basic-container>
      <h4>盒子卡片展示</h4>
      <avue-data-box :option="easyDataOption3"></avue-data-box>
    </basic-container>
    <basic-container>
      <h4>选项卡展示</h4>
      <avue-data-tabs :option="easyDataOption"></avue-data-tabs>
    </basic-container>
    <basic-container>
      <h4>卡片的展示</h4>
      <avue-data-card :option="easyDataOption0"></avue-data-card>
    </basic-container>
    <basic-container>
      <h4>带数字的展示</h4>
      <avue-data-icons :option="easyDataOption1"></avue-data-icons>
    </basic-container>
    <basic-container>
      <h4>简易展示</h4>
      <avue-data-icons :option="easyDataOption2"></avue-data-icons>
    </basic-container>
  </div>
</template>

<script>
export default {
  name: 'exhibition',
  components: {},
  data () {
    return {
      option: {
        // span: 8,
        // color: '#15A0FF',
        data: []
      },
      easyDataOption: {
        // span: 8,
        data: [
          {
            title: '分类统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(27, 201, 142)',
            key: '类'
          },
          {
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(230, 71, 88)',
            key: '附'
          },
          {
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(178, 159, 255)',
            key: '评'
          }
        ]
      },
      easyDataOption0: {
        span: 6,
        // borderColor: '#fff',
        data: []
      },
      easyDataOption1: {
        // color: 'rgb(63, 161, 255)',
        // span: 4,
        data: [
          {
            title: '今日注册',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '今日登录',
            count: 22139,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '今日订阅',
            count: 35623,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          }
        ]
      },
      easyDataOption2: {
        // color: 'rgb(63, 161, 255)',
        // span: 4,
        discount: true,
        data: [
          {
            title: '错误日志',
            icon: 'icon-cuowu'
          },
          {
            title: '数据展示',
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '权限管理',
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '菜单管理',
            icon: 'icon-caidanguanli'
          },
          {
            title: '权限测试',
            icon: 'icon-caidanguanli'
          },
          {
            title: '错误页面',
            icon: 'icon-caidanguanli'
          }
        ]
      },
      easyDataOption3: {
        data: [
          {
            title: '错误日志',
            count: 12332,
            icon: 'icon-cuowu',
            color: 'rgb(49, 180, 141)',
          },
          {
            title: '数据展示',
            count: 33,
            icon: 'icon-shujuzhanshi2',
            color: 'rgb(56, 161, 242)',
          },
          {
            title: '权限管理',
            count: 2223,
            icon: 'icon-jiaoseguanli',
            color: 'rgb(117, 56, 199)',
          }
        ]
      }
    }
  },
  created () {

  },
  watch: {},
  mounted () {
    this.option.data = [
      {
        count: 100,
        title: '日活跃数'
      },
      {
        count: '3,000',
        title: '月活跃数'
      },
      {
        count: '20,000',
        title: '年活跃数'
      },
      {
        count: '40,000',
        title: '周度跃数'
      }
    ]
    this.easyDataOption0.data = [
      {
        name: '姓名1',
        src: '/img/mock/card/card-1.jpg',
        text: '介绍1'
      },
      {
        name: '姓名2',
        src: '/img/mock/card/card-2.jpg',
        text: '介绍2'
      },
      {
        name: '姓名3',
        src: '/img/mock/card/card-3.jpg',
        text: '介绍3'
      },
      {
        name: '姓名4',
        src: '/img/mock/card/card-4.jpg',
        text: '介绍4'
      }
    ]
  },
  computed: {}
}
</script>

<style scoped>
</style>

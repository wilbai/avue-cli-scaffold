<template>
  <div>
    <basic-container>
      <avue-form-detail :option="option"
                        v-model="form">

        <template slot="zdy"
                  slot-scope="scope">
          自定义区域内容卡槽<br /> 回传数据：{{scope}}
        </template>
        <template slot="ztForm"
                  slot-scope="scope">
          <a href="#">
            {{scope.form.zt}}
            <small>(自定义form)</small>
          </a>
        </template>
      </avue-form-detail>

    </basic-container>
    <basic-container>
      <tree-view :data="option"
                 :options="jsonOption"></tree-view>
    </basic-container>
  </div>
</template>

<script>
import option from '@/const/forms/detailOption'
export default {
  data () {
    return {
      jsonOption: {
        maxDepth: 10,
        rootObjectKey: 'form-detail-option',
        modifiable: false
      },
      option: option,
      type: 'user',
      form: {

      }
    }
  },
  created () {
    this.form = {
      qhdh: '1000000000',
      zt: '	已取货',
      xsdh: '1234123421',
      zdd: '3214321432',
      yhxm: '付小小',
      lxdh: '18100000000',
      cykd: '菜鸟仓储',
      qhdz: '浙江省杭州市西湖区万塘路18号',
      bz: '无'
    }
  },
  methods: {
    handleChange (item) {
      this.type = item.prop;
    },
  }
}
</script>

<style>
</style>

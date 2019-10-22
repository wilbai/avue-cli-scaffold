export default {
    option: [{
            label: '退款申请',
            prop: 'tksq',
            icon: 'el-icon-view',
            // labelWidth: 100,
            //labelPostion:'right',
            column: [{
                label: '取货单号',
                prop: 'qhdh'
            }, {
                label: '状态',
                prop: 'zt',
                slot: true,
            }, {
                label: '销售单号',
                prop: 'xsdh'
            }, {
                label: '子订单',
                prop: 'zdd'
            }]
        },
        {
            label: '用户信息',
            prop: 'yhxx',
            icon: 'el-icon-edit-outline',
            column: [{
                label: '用户姓名',
                prop: 'yhxm'
            }, {
                label: '联系电话',
                prop: 'lxdh'
            }, {
                label: '常用快递',
                prop: 'cykd'
            }, {
                label: '取货地址',
                prop: 'qhdz'
            }, {
                label: '备注',
                prop: 'bz'
            }]
        }, {
            label: '自定义区域',
            prop: 'zdy',
            icon: 'el-icon-edit',
            slot: true,
        }
    ]
}
import {
    DIC
} from '@/const/dic'
export default {
    simple: undefined,
    direction: undefined, //vertical/horizontal
    finishStatus: 'success', //wait / process / finish / error / success
    processStatus: 'process',
    space: undefined,
    // breakBtn: false,
    switchBtn: true,
    column: [{
        label: '填写转账信息',
        prop: 'info',
        // status: 'error',
        description: '用于信息的转账',
        // icon: 'el-icon-date',
        option: {
            formWidth: '40%',
            submitText: '下一步',
            column: [{
                    label: "付款账户",
                    prop: "username",
                    span: 24,
                    size: 'small',
                    rules: [{
                        required: true,
                        message: "请输入付款账户",
                        trigger: "blur"
                    }],
                },
                {
                    label: "收款类型",
                    span: 24,
                    prop: "type",
                    type: 'select',
                    size: 'small',
                    dicData: DIC.PAYTYPE,
                    rules: [{
                        required: true,
                        message: "请选择收款类型",
                        trigger: "blur"
                    }]
                },
                {
                    label: "收款账户",
                    span: 24,
                    prop: "acount",
                    size: 'small',
                    rules: [{
                        required: true,
                        message: "请输入收款账户",
                        trigger: "blur"
                    }]
                },
                {
                    label: "转账金额",
                    span: 24,
                    prop: "money",
                    size: 'small',
                    prefixIcon: 'el-icon-tickets',
                    rules: [{
                        required: true,
                        message: "请输入转账金额",
                        trigger: "blur"
                    }]
                },
            ]
        }
    }, {
        label: '确认转账信息',
        prop: 'pwd',
        description: '为了安全再次确认转账',
        // icon: 'el-icon-picture',
        option: {
            submitText: '提交',
            formWidth: '40%',
            column: [{
                label: "支付密码",
                prop: "password",
                type: 'password',
                size: 'small',
                span: 24,
                rules: [{
                    required: true,
                    message: "请输入支付密码",
                    trigger: "blur"
                }],
            }]
        }
    }, {
        label: '完成',
        prop: 'finsh',
        description: '转账信息完成',
        // icon: 'el-icon-picture-outline',
        option: {
            submitBtn: false,
            column: []
        }
    }]
}
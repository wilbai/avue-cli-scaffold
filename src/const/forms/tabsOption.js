import {
    DIC
} from '@/const/dic'
export default {
    // type: 'card', //card/border-card
    // tabPosition: 'top', //top/right/bottom/left
    column: [{
        label: '用户信息',
        prop: 'user',
        icon: 'el-icon-date',
        option: {
            dicData: DIC,
            submitText: '完成',
            column: [{
                    label: "用户名",
                    prop: "username",
                    rules: [{
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    }],
                },
                {
                    label: "姓名",
                    prop: "name",
                    disabled: true,
                    formsolt: true,
                },
            ]
        }
    }, {
        label: '商户信息',
        prop: 'shanghu',
        icon: 'el-icon-picture',
        option: {
            submitText: '完成',
            column: [{
                label: "商户名称",
                prop: "owName",
                rules: [{
                    required: true,
                    message: "请输入商户名称",
                    trigger: "blur"
                }],
            }]
        }
    }, {
        label: '微信信息',
        prop: 'weixin',
        icon: 'el-icon-picture-outline',
        option: {
            submitText: '完成',
            column: [{
                label: "微信名称",
                prop: "weixinName",
                rules: [{
                    required: true,
                    message: "请输入微信名称",
                    trigger: "blur"
                }],
            }]
        }
    }, {
        label: 'QQ信息',
        prop: 'qq',
        disabled: true,
        icon: 'el-icon-share',
        option: {
            submitText: '完成',
            column: [{
                label: "QQ名称",
                prop: "qqName",
                rules: [{
                    required: true,
                    message: "请输入QQ名称",
                    trigger: "blur"
                }],
            }]
        }
    }]
}
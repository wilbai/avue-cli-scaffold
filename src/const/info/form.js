export default {
    column: [{
        label: '个人信息',
        prop: 'info',
        option: {
            submitText: '修改',
            column: [{
                label: '姓名',
                span: 6,
                row: true,
                prop: 'name'
            }, {
                label: '用户名',
                span: 12,
                row: true,
                prop: 'username'
            }, {
                label: '手机号',
                span: 12,
                row: true,
                prop: 'phone'
            }, {
                label: '个性签名',
                prop: 'detail',
                span: 24,
                row: true,
                type: 'textarea',
                minRows: 5,
                maxRows: 8,
            }]
        }
    }, {
        label: '修改密码',
        prop: 'password',
        option: {
            submitText: '修改',
            column: [{
                label: '原密码',
                span: 12,
                row: true,
                type: 'password',
                prop: 'oldpassword'
            }, {
                label: '新密码',
                span: 12,
                row: true,
                type: 'password',
                prop: 'newpassword'
            }, {
                label: '确认密码',
                span: 12,
                row: true,
                type: 'password',
                prop: 'newpasswords'
            }]
        }
    }]
}
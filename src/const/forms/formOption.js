import {
    DIC
} from '@/const/dic'
export default {
    dicData: DIC,
    submitText: '完成',
    column: [{
            label: "用户名",
            prop: "username",
            tip: '这是信息提示',
            span: 24,
            maxlength: 3,
            suffixIcon: 'el-icon-tickets',
            prefixIcon: 'el-icon-tickets',
            minlength: 2,
            row: true,
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
        {
            label: "类型",
            prop: "type",
            type: "select",
            dicData: 'GRADE'
        },

        {
            label: "开关",
            prop: "switch",
            span: 8,
            type: "switch",
            dicData: 'SEX',
            hide: true,
        },
        {
            label: "性别",
            prop: "sex",
            span: 8,
            type: "radio",
            dicData: 'SEX',
            valueDefault: 0,
        },

        {
            label: "权限",
            prop: "grade",
            span: 8,
            type: "checkbox",
            dicData: 'GRADE'
        },
        {
            label: "数字",
            prop: "number",
            type: 'number',
            span: 24,
            valueDefault: 3,
            minRows: 0,
            maxRows: 3,
        },
        {
            label: "地址",
            span: 24,
            minRows: 5,
            type: "ueditor",
            prop: "address",
            component: 'AvueUeditor',
        }
    ]
};
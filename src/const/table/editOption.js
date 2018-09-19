import {
    DIC
} from '@/const/dic'
export default {
    page: false,
    align: 'center',
    menuAlign: 'center',
    border: true,
    cellBtn: true,
    editBtn: false,
    delBtn: false,
    menuWidth: 130,
    column: [{
            label: '姓名',
            prop: 'name',
            fixed: true,
            cell: true
        },
        {
            label: '性别',
            prop: 'sex',
            type: 'select',
            cell: true,
            dicData: DIC.SEX
        }
    ]
}
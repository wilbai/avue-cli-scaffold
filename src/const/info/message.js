export default {
    column: [{
        label: '全部信息',
        prop: 'all',
        type: 'crud',
        option: {
            selection: true,
            addBtn: false,
            menu: false,
            header: false,
            column: [{
                width: 500,
                label: '标题内容',
                prop: 'title'
            }, {
                label: '时间',
                prop: 'date'
            }]
        }
    }, {
        label: '通知',
        prop: 'msg',
        type: 'crud',
        option: {
            selection: true,
            addBtn: false,
            menu: false,
            header: false,
            column: [{
                width: 500,
                label: '标题内容',
                prop: 'title'
            }, {
                label: '时间',
                prop: 'date'
            }]
        }
    }, {
        label: '私信',
        prop: 'one',
        type: 'crud',
        option: {
            selection: true,
            addBtn: false,
            menu: false,
            header: false,
            column: [{
                width: 500,
                label: '标题内容',
                prop: 'title'
            }, {
                label: '时间',
                prop: 'date'
            }]
        }
    }]
}
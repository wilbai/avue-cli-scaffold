import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import ('@/page/wel')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import ('@/views/info/index')
    }]
}, {
    path: '/dev',
    component: Layout,
    redirect: '/dev/index',
    children: [{
        path: 'index',
        name: '环境变量',
        component: () =>
            import ('@/views/dev/index')
    }]
}, {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [{
        path: 'index',
        name: '引导页',
        component: () =>
            import ('@/views/guide/index')
    }]
}, {
    path: '/store',
    component: Layout,
    redirect: '/store/index',
    children: [{
        path: 'index',
        name: '数据持久化',
        component: () =>
            import ('@/views/store/index')
    }]
}, {
    path: '/clipboard',
    component: Layout,
    redirect: '/clipboard/index',
    children: [{
        path: 'index',
        name: '剪切板',
        component: () =>
            import ('@/views/clipboard/index')
    }]
}, {
    path: '/role',
    component: Layout,
    redirect: '/role/index',
    children: [{
        path: 'index',
        name: '权限测试页',
        component: () =>
            import ('@/views/role')
    }]
}, {
    path: '/gray',
    component: Layout,
    redirect: '/gray/index',
    children: [{
        path: 'index',
        name: '灰度模式',
        component: () =>
            import ('@/views/gray/index')
    }]
}, {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    children: [{
            path: 'index',
            name: '表格CRUD',
            component: () =>
                import ('@/views/table/index')
        },
        {
            path: 'generator',
            name: '表格生成器',
            meta: {
                keepAlive: true,
            },
            component: () =>
                import ('@/views/table/generator')
        },
        {
            path: 'tree',
            name: '表格TREE',
            component: () =>
                import ('@/views/table/table-tree/index')
        },
        {
            path: 'edit',
            name: '表格EDIT',
            component: () =>
                import ('@/views/table/edit')
        },
        {
            path: 'alltree',
            name: '表格TREE自定义',
            component: () =>
                import ('@/views/table/table-tree/all')
        }
    ]
}, {
    path: '/exhibition',
    component: Layout,
    redirect: '/exhibition/index',
    children: [{
        path: 'index',
        name: '数据展示',
        component: () =>
            import ('@/views/exhibition/index')
    }]
}, {
    path: '/forms',
    component: Layout,
    redirect: '/forms/index',
    children: [{
        path: 'builder',
        name: '拖动表单',
        meta: {
            keepAlive: true,
        },
        component: () =>
            import ('@/views/forms/builder')
    }, {
        path: 'index',
        name: '表单CRUD',
        component: () =>
            import ('@/views/forms/index')
    }, {
        path: 'tabs',
        name: '表单TABS',
        component: () =>
            import ('@/views/forms/tabs')
    }, {
        path: 'select',
        name: '表单SELECT联动',
        component: () =>
            import ('@/views/forms/select')
    }, {
        path: 'date',
        name: '表单DATE',
        component: () =>
            import ('@/views/forms/date')
    }, {
        path: 'tree',
        name: '表单CASCADER',
        component: () =>
            import ('@/views/forms/tree')
    }, {
        path: 'steps',
        name: '表单STEPS',
        component: () =>
            import ('@/views/forms/steps')
    }, {
        path: 'rate',
        name: '表单RATE',
        component: () =>
            import ('@/views/forms/rate')
    }, {
        path: 'upload',
        name: '表单UPLOAD',
        component: () =>
            import ('@/views/forms/upload')
    }, {
        path: 'detail',
        name: '表单DETAIL',
        component: () =>
            import ('@/views/forms/detail')
    }, {
        path: 'silder',
        name: '表单SILDER',
        component: () =>
            import ('@/views/forms/silder')
    }]
}, {
    path: '/iconfont',
    component: Layout,
    redirect: '/iconfont/index',
    children: [{
        path: 'index',
        name: '阿里图标',
        component: () =>
            import ('@/views/iconfont/index')
    }]
}, {
    path: '/json-tree',
    component: Layout,
    redirect: '/json-tree/index',
    children: [{
        path: 'index',
        name: 'json树形',
        component: () =>
            import ('@/views/json-tree/index')
    }]
}, {
    path: '/logs',
    component: Layout,
    redirect: '/logs/index',
    children: [{
        path: 'page',
        name: '错误页面',
        component: () =>
            import ('@/page/logs/page')
    }, {
        path: 'error',
        name: '错误日志',
        component: () =>
            import ('@/page/logs/error')
    }]
}, {
    path: '/advanced-router',
    component: Layout,
    children: [{
        path: 'mutative-router',
        name: '动态路由',
        component: () =>
            import ('@/views/advanced-router/mutative-router')
    }, {
        path: 'argument-page',
        name: '参数路由',
        component: () =>
            import ('@/views/advanced-router/argument-page')
    }, {
        path: 'mutative-detail/:id',
        name: '动态路由详情页',
        component: () =>
            import ('@/views/advanced-router/mutative-detail')
    }, {
        path: 'argument-detail',
        name: '参数路由详情页',
        component: () =>
            import ('@/views/advanced-router/argument-detail')
    }]
}, {
    path: '/admin',
    component: Layout,
    children: [{
        path: 'user',
        name: '用户管理',
        component: () =>
            import ('@/views/admin/user/index')
    }, {
        path: 'role',
        name: '角色管理',
        component: () =>
            import ('@/views/admin/role/index')
    }, {
        path: 'menu',
        name: '菜单管理',
        component: () =>
            import ('@/views/admin/menu/index')
    }]
}]
import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/page/wel')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/views/info/index')
    }, {
        path: 'message',
        name: '消息中心',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/views/info/message')
    }]
}, {
    path: '/advanced-router',
    component: Layout,
    children: [{
        path: 'mutative-detail/:id',
        name: '动态路由详情页',
        component: () =>
            import ( /* webpackChunkName: "utils" */ '@/views/advanced-router/mutative-detail')
    }, {
        path: 'argument-detail',
        name: '参数路由详情页',
        component: () =>
            import ( /* webpackChunkName: "utils" */ '@/views/advanced-router/argument-detail')
    }]
}, ]
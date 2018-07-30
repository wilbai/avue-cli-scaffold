import router from './router/router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import {
    setTitle
} from '@/util/util';
import {
    asyncRouterMap
} from '@/router/router'
NProgress.configure({
    showSpinner: false
});
const lockPage = store.getters.website.lockPage;
router.addRoutes(asyncRouterMap);
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (store.getters.token) {
        if (store.getters.isLock && to.path != lockPage) {
            next({
                path: lockPage
            })
            NProgress.done();
        } else if (to.path === '/login') {
            next({
                path: '/'
            })
            NProgress.done();
        } else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(() => {
                    next({...to,
                        replace: true
                    })
                }).catch(() => {
                    store.dispatch('FedLogOut').then(() => {
                        next({
                            path: '/login'
                        })
                        NProgress.done();
                    })
                })
            } else {
                let flag = true;
                const whiteList = store.getters.website.whiteList
                for (let i = 0; i < whiteList.length; i++) {
                    if (new RegExp("^" + whiteList[i].toString() + ".*", "g").test(to.path)) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    const value = to.query.src ? to.query.src : to.path;
                    const label = to.query.name ? to.query.name : to.name;
                    store.commit('ADD_TAG', {
                        label: label,
                        value: value,
                        query: to.query
                    });
                }
                next()
            }
        }
    } else {
        let flag = true;
        const whiteList = store.getters.website.whiteList
        for (let i = 0; i < whiteList.length; i++) {
            if (new RegExp("^" + whiteList[i].toString() + ".*", "g").test(to.path)) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            next()
        } else {
            next('/login')
            NProgress.done();
        }
    }
})

router.afterEach(() => {
    NProgress.done();
    setTimeout(() => {
        const tag = store.getters.tag;
        setTitle(tag.label);
    }, 0);
})
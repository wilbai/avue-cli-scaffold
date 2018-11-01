let RouterPlugin = function() {
    this.$router = null;
    this.$store = null;
};
RouterPlugin.install = function(router, store) {
    this.$router = router;
    this.$store = store;

    function objToform(obj) {
        let result = [];
        Object.keys(obj).forEach(ele => {
            result.push(`${ele}=${obj[ele]}`);
        })
        return result.join('&');
    }
    this.$router.$avueRouter = {
        //全局配置
        $website: this.$store.getters.website,
        safe: this,
        // 设置标题
        setTitle: function(title) {
            title = title ? `${title}——Avue 通用管理 系统快速开发框架` : 'Avue 通用管理 系统快速开发框架';
            document.title = title;
        },
        closeTag: (value) => {
            const tag = value || this.$store.getters.tag;
            this.$store.commit('DEL_TAG', tag)
        },
        //处理路由
        getPath: function(params) {
            let { src } = params;
            let result = src || '/';
            if (src.includes("http") || src.includes("https")) {
                result = `/myiframe/urlPath?${objToform(params)}`;
            }
            return result;
        },
        //正则处理路由
        vaildPath: function(list, path) {
            let result = false;
            list.forEach(ele => {
                if (new RegExp("^" + ele + ".*", "g").test(path)) {
                    result = true
                }

            })
            return result;
        },
        //设置路由值
        getValue: function(route) {
            let value = "";
            if (route.query.src) {
                value = route.query.src;
            } else {
                value = route.path;
            }
            return value;
        },
        //动态路由
        formatRoutes: function(aMenu, first) {
            const aRouter = []
            const propsConfig = this.$website.menu.props;
            const propsDefault = {
                label: propsConfig.label || 'label',
                path: propsConfig.path || 'path',
                icon: propsConfig.icon || 'icon',
                children: propsConfig.children || 'children'
            }
            if (!aMenu) return;
            aMenu.forEach(oMenu => {
                const path = oMenu[propsDefault.path],
                    component = oMenu.component,
                    name = oMenu[propsDefault.label],
                    icon = oMenu[propsDefault.icon],
                    children = oMenu[propsDefault.children];

                const isChild = children.length !== 0;
                const oRouter = {
                    path: path,
                    component(resolve) {
                        // 判断是否为首路由
                        if (first) {
                            require(['../page/index'], resolve)
                            return
                            // 判断是否为多层路由
                        } else if (isChild && !first) {
                            require(['../page/index/layout'], resolve)
                            return
                            // 判断是否为最终的页面视图
                        } else {
                            require([`../${component}.vue`], resolve)
                        }
                    },
                    name: name,
                    icon: icon,
                    redirect: (() => {
                        if (!isChild && first) return `${path}/index`
                        else return '';
                    })(),
                    // 处理是否为一级路由
                    children: !isChild ? (() => {
                        if (first) {
                            oMenu[propsDefault.path] = `${path}/index`;
                            return [{
                                component(resolve) { require([`../${component}.vue`], resolve) },
                                icon: icon,
                                name: name,
                                path: 'index'
                            }]
                        }
                        return [];
                    })() : (() => {
                        return this.formatRoutes(children, false)
                    })()
                }
                aRouter.push(oRouter)
            })
            if (first) {
                this.safe.$router.addRoutes(aRouter)
            } else {
                return aRouter
            }

        }
    }
}
export default RouterPlugin;
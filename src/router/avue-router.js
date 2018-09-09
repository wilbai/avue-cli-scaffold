let RouterPlugin = function() {
    this.$router = null;
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
        }
    }
}
export default RouterPlugin;
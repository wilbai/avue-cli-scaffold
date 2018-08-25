module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
    },
    //配置转发代理
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:3000',
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': '/api'
        //         }
        //     },
        // }
    }
}
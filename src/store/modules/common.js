import {
    setStore,
    getStore,
    removeStore
} from '@/util/store'
import {
    getDic
} from '@/api/admin'
import website from '@/const/website'
const common = {

    state: {
        isCollapse: false,
        isFullScren: false,
        isLock: getStore({
            name: 'isLock'
        }) || false,
        theme: getStore({
            name: 'theme'
        }) || '#409EFF',
        themeName: getStore({
            name: 'themeName'
        }) || '',
        lockPasswd: getStore({
            name: 'lockPasswd'
        }) || '',
        website: website,
    },
    actions: {
        //获取字典公用类
        GetDic(params, dic) {
            return new Promise((resolve) => {
                if (dic instanceof Array) {
                    Promise.all(dic.map(ele => getDic(ele))).then(data => {
                        let result = {};
                        dic.forEach((ele, index) => {
                            result[ele] = data[index].data;
                        })
                        resolve(result)
                    })
                }
            })
        }
    },
    mutations: {
        SET_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        SET_FULLSCREN: (state) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_LOCK: (state) => {
            state.isLock = true;
            setStore({
                name: 'isLock',
                content: state.isLock,
                type: 'session'
            })
        },
        SET_THEME: (state, color) => {
            state.theme = color;
            setStore({
                name: 'theme',
                content: state.theme,
            })
        },
        SET_THEME_NAME: (state, themeName) => {
            state.themeName = themeName;
            setStore({
                name: 'themeName',
                content: state.themeName,
            })
        },
        SET_LOCK_PASSWD: (state, lockPasswd) => {
            state.lockPasswd = lockPasswd;
            setStore({
                name: 'lockPasswd',
                content: state.lockPasswd,
                type: 'session'
            })
        },
        CLEAR_LOCK: (state) => {
            state.isLock = false;
            state.lockPasswd = '';
            removeStore({
                name: 'lockPasswd'
            });
            removeStore({
                name: 'isLock'
            });
        },
    }
}
export default common
import { setStore, getStore, removeStore } from '@/util/store'
import { isObjectValueEqual } from '@/util/util'
const tagObj = {
    label: '', //标题名称
    value: '', //标题的路径
    params: '', //标题的路径参数
    query: '', //标题的参数
}

//处理首个标签
function setFistTag(list) {
    if (list.length == 1) {
        list[0].close = false;
    } else {
        list.some(a => {
            a.close = true
        })
    }
}


const navs = {
    state: {
        tagList: getStore({ name: 'tagList' }) || [],
        tag: getStore({ name: 'tag' }) || tagObj,
        tagWel: {
            label: "首页",
            value: "/wel/index",
            params: {},
            query: {},
            close: false
        }
    },
    actions: {

    },
    mutations: {
        ADD_TAG: (state, action) => {
            state.tag = action;
            setStore({ name: 'tag', content: state.tag, type: 'session' })
            if (state.tagList.some(ele => isObjectValueEqual(ele, action))) return
            state.tagList.push(action)
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
        DEL_TAG: (state, action) => {
            state.tagList = state.tagList.filter(item => {
                if (typeof(action) === 'object') {
                    let a = Object.assign({}, item);
                    let b = Object.assign({}, action);
                    delete a.close;
                    delete b.__ob__;
                    return !isObjectValueEqual(a, b)
                } else {
                    return item.value !== action
                }
            })
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
        DEL_ALL_TAG: (state) => {
            state.tagList = [];
            removeStore({ name: 'tagList' });
        },
        DEL_TAG_OTHER: (state) => {
            state.tagList = state.tagList.filter(item => item.value === state.tag.value)
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
    }
}
export default navs
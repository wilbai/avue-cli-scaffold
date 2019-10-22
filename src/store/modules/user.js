import { setToken, removeToken } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
import { isURL, validatenull } from '@/util/validate'
import { encryption, deepClone } from '@/util/util'
import webiste from '@/const/website'
import { loginByUsername, getUserInfo, getMenu, logout, getTopMenu, RefeshToken } from '@/api/user'


function addPath (ele, first) {
  const propsConfig = webiste.menu.props;
  const propsDefault = {
    label: propsConfig.label || 'label',
    path: propsConfig.path || 'path',
    icon: propsConfig.icon || 'icon',
    children: propsConfig.children || 'children'
  }
  const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
  if (!isChild && first) {
    ele[propsDefault.path] = ele[propsDefault.path] + '/index'
    return
  }
  ele[propsDefault.children].forEach(child => {
    if (!isURL(child[propsDefault.path])) {
      child[propsDefault.path] = `${ele[propsDefault.path]}/${child[propsDefault.path] ? child[propsDefault.path] : 'index'}`
    }
    addPath(child);
  })
}
const user = {
  state: {
    userInfo: {},
    permission: {},
    roles: [],
    menuId: getStore({ name: 'menuId' }) || [],
    menu: getStore({ name: 'menu' }) || [],
    menuAll: getStore({ name: 'menuAll' }) || [],
    token: getStore({ name: 'token' }) || '',
  },
  actions: {
    //根据用户名登录
    LoginByUsername ({ commit }, userInfo) {
      const user = encryption({
        data: userInfo,
        type: 'Aes',
        key: 'avue',
        param: ['useranme', 'password']
      });
      return new Promise((resolve) => {
        loginByUsername(user.username, user.password, userInfo.code, userInfo.redomStr).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          setToken(data);
          resolve();
        })
      })
    },
    //根据手机号登录
    LoginByPhone ({ commit }, userInfo) {
      return new Promise((resolve) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          setToken(data);
          resolve();
        })
      })
    },
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const data = res.data.data;
          commit('SET_USERIFNO', data.userInfo);
          commit('SET_ROLES', data.roles);
          commit('SET_PERMISSION', data.permission)
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      })
    },
    //刷新token
    RefeshToken ({ commit }) {
      return new Promise((resolve, reject) => {
        RefeshToken().then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          setToken(data);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_MENUID', {})
          commit('SET_MENU', [])
          commit('SET_ROLES', [])
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //注销session
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENUID', {})
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG');
        commit('CLEAR_LOCK');
        removeToken()
        resolve()
      })
    },
    GetTopMenu () {
      return new Promise(resolve => {
        getTopMenu().then((res) => {
          const data = res.data.data || []
          resolve(data)
        })
      })
    },
    //获取系统菜单
    GetMenu ({ commit }, parentId) {
      return new Promise(resolve => {
        getMenu(parentId).then((res) => {
          const data = res.data.data
          let menu = deepClone(data);
          menu.forEach(ele => {
            addPath(ele, true);
          })
          commit('SET_MENU', menu)
          resolve(menu)
        })
      })
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setStore({ name: 'token', content: state.token, type: 'session' })
    },
    SET_MENUID: (state, menuId) => {
      state.menuId = menuId
      setStore({ name: 'menuId', content: state.menuId, type: 'session' })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      let menuAll = state.menuAll;
      if (!validatenull(menu)) {
        const obj = menuAll.filter(ele => ele.path === menu[0].path)[0]
        if (!obj) {
          menuAll = menuAll.concat(menu);
          state.menuAll = menuAll
        }
        setStore({ name: 'menuAll', content: state.menuAll, type: 'session' })
      }
      setStore({ name: 'menu', content: state.menu, type: 'session' })
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll;
      setStore({ name: 'menuAll', content: state.menuAll, type: 'session' })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = {};
      permission.forEach(ele => {
        state.permission[ele] = true;
      });
    }
  }

}
export default user
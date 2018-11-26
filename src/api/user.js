import request from '@/router/axios';
export const loginByUsername = (username, password, code, redomStr) => request({
    url: '/user/login',
    method: 'post',
    data: {
        username,
        password,
        code,
        redomStr
    }
})

export const getUserInfo = () => request({
    url: '/user/getUserInfo',
    method: 'get'
});

export const RefeshToken = () => request({
    url: '/user/refesh',
    method: 'post'
})

export const getMenu = (type = 0) => request({
    url: '/user/getMenu',
    method: 'get',
    data: {
        type
    }
});

export const getMenuAll = () => request({
    url: '/user/getMenu',
    method: 'get',
    data: {
        type: 0
    }
});

export const getTableData = (page) => request({
    url: '/user/getTable',
    method: 'get',
    data: {
        page
    }
});

export const logout = () => request({
    url: '/user/logout',
    method: 'get'
})
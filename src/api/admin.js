import request from '@/router/axios';
export const getUserData = (page) => request({
    url: '/admin/getUser',
    method: 'get',
    data: { page }
})

export const getRoleData = (page) => request({
    url: '/admin/getRole',
    method: 'get',
    data: { page }
})



export const getDic = (type) => request({
    url: '/admin/getDic',
    method: 'get',
    data: {
        type
    }
})
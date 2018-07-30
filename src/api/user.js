import { userInfo, tableData } from '@/mock/user'
import { menu } from '@/mock/menu'
export const loginByUsername = (username, password, code, redomStr) => {
    console.log(username, password, code, redomStr);
    return new Promise((resolve) => {
        resolve({ data: new Date().getTime() });
    })
}

export const getUserInfo = () => {
    return new Promise((resolve) => {
        resolve({ data: userInfo });
    })
}
export const RefeshToken = () => {
    return new Promise((resolve) => {
        resolve({ data: new Date().getTime() });
    })
}

export const getMenu = (parentId) => {
    return new Promise((resolve) => {
        if (parentId != 1) parentId = 0;
        resolve({ data: menu[parentId] });
    })
}
export const getMenuAll = () => {
    return new Promise((resolve) => {
        resolve({ data: menu[0] });
    })
}

export const getTableData = (page) => {
    console.log(page);
    return new Promise((resolve) => {
        resolve({ data: tableData });
    })
}
export const logout = () => {
    return new Promise((resolve) => {
        resolve();
    })
}
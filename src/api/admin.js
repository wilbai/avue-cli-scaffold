import { userTableData, roleTableData } from '@/mock/admin'
import { DIC } from '@/const/dic'
export const getUserData = () => {
    return new Promise((resolve) => {
        resolve({ data: userTableData });
    })
}

export const getRoleData = () => {
    return new Promise((resolve) => {
        resolve({ data: roleTableData });
    })
}

export const getDic = (type) => {
    return new Promise((resolve, ) => {
        resolve({ data: DIC[type] });
    })
}
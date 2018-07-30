import { getUserData, getRoleData } from '@/api/admin'
const user = {
    state: {

    },
    actions: {
        GetUserData(params, page) {
            return new Promise((resolve) => {
                getUserData(page).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },
        GetRoleData(params, page) {
            return new Promise((resolve) => {
                getRoleData(page).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },

    },
    mutations: {

    }

}
export default user
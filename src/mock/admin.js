import Mock from 'mockjs'
import { dateFormat } from '@/filters/'
import { DIC } from '@/const/dic'

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock('/admin/getDic', 'get', (res) => {
        let body = JSON.parse(res.body);
        return {
            data: DIC[body.type]
        }
    })
    Mock.mock('/admin/getRole', 'get', (res) => {
        let body = JSON.parse(res.body);
        let list = []
        for (let i = 0; i < 2; i++) {
            list.push(Mock.mock({
                id: '@increment',
                name: Mock.mock('@cname'),
                date: dateFormat(new Date()),
                check: [1, 3, 5]
            }))
        }
        return {
            data: {
                page: body.page,
                total: 11,
                pageSize: 10,
                tableData: list
            }
        }
    })
    Mock.mock('/admin/getUser', 'get', (res) => {
        let body = JSON.parse(res.body);
        let list = []
        for (let i = 0; i < 2; i++) {
            list.push(Mock.mock({
                id: '@increment',
                name: Mock.mock('@cname'),
                username: Mock.mock('@last'),
                ueditor: `<h3>${Mock.mock('@cname')}<h3>`,
                grade: [0, 1],
                state: 0,
                date: dateFormat(new Date()),
            }))
        }
        return {
            data: {
                page: body.page,
                total: 11,
                pageSize: 10,
                tableData: list
            }
        }

    })
}
import { DIC } from '@/const/dic'
export default {

    column: [{
        label: '多选',
        prop: 'shenfeng',
        type: 'tree',
        multiple: true,
        dicData: DIC.UITYPE,
        rules: [{
            required: true,
            message: "请选择多选",
            trigger: "change"
        }]
    }, {
        label: '单选',
        prop: 'shenfeng1',
        type: 'tree',
        dicData: DIC.UITYPE,
        rules: [{
            required: true,
            message: "请选择单选",
            trigger: "change"
        }]
    }]
}
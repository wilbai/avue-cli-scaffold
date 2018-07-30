export default {
    labelWidth: 120,
    column: [{
        label: '附件上传',
        prop: 'imgUrl',
        type: 'upload',
        span: 24,
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: '',
    }, {
        label: '用户头像',
        prop: 'imgUrl3',
        type: 'upload',
        showFileList: false,
        listType: 'picture-img',
        span: 24,
        tip: '只能上传jpg/png用户头像，且不超过500kb',
        action: '',
    }, {
        label: '照片墙',
        prop: 'imgUrl',
        type: 'upload',
        span: 24,
        listType: 'picture-card',
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: '',
    }, {
        label: '拖拽上传',
        prop: 'imgUrl',
        type: 'upload',
        span: 24,
        drag: true,
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: '',
    }, {
        label: '缩略图上传',
        prop: 'imgUrl',
        type: 'upload',
        limit: 3,
        span: 24,
        listType: 'picture',
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: '', //上传图片地址
    }]
}
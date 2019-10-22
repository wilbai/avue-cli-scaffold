export default {
    labelWidth: 120,
    column: [{
        label: '附件上传',
        prop: 'imgUrl',
        type: 'upload',
        loadText: '附件上传中，请稍等',
        span: 24,
        propsHttp: {
            name: 'label',
            url: 'value'
        },
        props: {
            label: 'label',
            value: 'value'
        },
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/',
    }, {
        label: '用户头像',
        prop: 'imgUrl3',
        type: 'upload',
        showFileList: false,
        listType: 'picture-img',
        span: 24,
        tip: '只能上传jpg/png用户头像，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/',
    }, {
        label: '照片墙',
        prop: 'imgUrl',
        type: 'upload',
        span: 24,
        listType: 'picture-card',
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/',
    }, {
        label: '数组图片组',
        prop: 'img',
        dataType: 'array',
        type: 'upload',
        span: 24,
        listType: 'picture-card',
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/',
    }, {
        label: '拖拽上传',
        prop: 'imgUrl',
        type: 'upload',
        span: 24,
        drag: true,
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/',
    }, {
        label: '缩略图上传',
        prop: 'imgUrl',
        type: 'upload',
        limit: 3,
        span: 24,
        listType: 'picture',
        tip: '只能上传jpg/png文件，且不超过500kb',
        action: 'https://jsonplaceholder.typicode.com/posts/', //上传图片地址
    }]
}
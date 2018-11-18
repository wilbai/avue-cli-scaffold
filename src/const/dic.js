/**
 * 本地全局字典
 *
 */
export const DIC = {
    VAILD: [{
        label: '真',
        value: 'true',
        color: 'green'
    }, {
        label: '假',
        value: 'false',
        color: 'red'
    }],
    SEX: [{
        label: '男',
        value: 0,
        color: 'green'
    }, {
        label: '女',
        value: 1,
        color: 'red'
    }],
    POSTIONDATA: [{
        label: '左对齐',
        value: 'left'
    }, {
        label: '居中',
        value: 'center'
    }, {
        label: '右对齐',
        value: 'right'
    }],
    TYPE: [{
            label: '一级1',
            value: 0,
            children: [{
                label: '一级1二级1',
                value: 2,
            }]
        }, {
            label: '一级2',
            value: 1,
            children: [{
                label: '一级2二级1',
                value: 2,
            }]
        }

    ],
    STATE: [{
        label: '有效',
        value: 0
    }, {
        label: '无效',
        value: 1
    }],
    GRADE: [{
            label: "管理员",
            value: 0
        },
        {
            label: "二级管理员",
            value: 1
        }
    ],
    VAILDATA: [{
            label: "激活",
            value: true,
        },
        {
            label: "禁用",
            value: false,
        }
    ],
    CRUDTYPE: [{
            label: "输入框",
            value: ''
        }, {
            label: "选择框",
            value: 'select'
        },
        {
            label: "文本框",
            value: 'text'
        },
        {
            label: "密码框",
            value: 'password'
        },
        {
            label: "树型框",
            value: 'tree'
        },
        {
            label: "富文本编辑框",
            value: 'ueditor'
        },
        {
            label: "多行文本框",
            value: 'textarea'
        },
        {
            label: "单选框",
            value: 'radio'
        },
        {
            label: "多选框",
            value: 'checkbox'
        },
        {
            label: "数字框",
            value: 'number'
        },
        {
            label: "日期框",
            value: 'date'
        },
        {
            label: "日期范围框",
            value: 'daterange'
        },
        {
            label: "时间范围框",
            value: 'datetimerange'
        },
        {
            label: "时间框",
            value: 'datetime'
        },
        {
            label: "周",
            value: 'week'
        },
        {
            label: "月",
            value: 'month'
        },
        {
            label: "年",
            value: 'year'
        },
        {
            label: "滑动框",
            value: 'silder'
        },
        {
            label: "评价框",
            value: 'rate'
        },
        {
            label: "上传框",
            value: 'upload'
        }
    ],
    UITYPE: [{
        value: 'zhinan',
        label: '指南',
        children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
                value: 'yizhi',
                label: '一致'
            }, {
                value: 'fankui',
                label: '反馈'
            }, {
                value: 'xiaolv',
                label: '效率'
            }, {
                value: 'kekong',
                label: '可控'
            }]
        }, {
            value: 'daohang',
            label: '导航',
            children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
            }, {
                value: 'dingbudaohang',
                label: '顶部导航'
            }]
        }]
    }, {
        value: 'zujian',
        label: '组件',
        children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
                value: 'layout',
                label: 'Layout 布局'
            }, {
                value: 'color',
                label: 'Color 色彩'
            }, {
                value: 'typography',
                label: 'Typography 字体'
            }, {
                value: 'icon',
                label: 'Icon 图标'
            }, {
                value: 'button',
                label: 'Button 按钮'
            }]
        }, {
            value: 'form',
            label: 'Form',
            children: [{
                value: 'radio',
                label: 'Radio 单选框'
            }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
            }, {
                value: 'input',
                label: 'Input 输入框'
            }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
            }, {
                value: 'select',
                label: 'Select 选择器'
            }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
            }, {
                value: 'switch',
                label: 'Switch 开关'
            }, {
                value: 'slider',
                label: 'Slider 滑块'
            }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
            }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
            }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
            }, {
                value: 'upload',
                label: 'Upload 上传'
            }, {
                value: 'rate',
                label: 'Rate 评分'
            }, {
                value: 'form',
                label: 'Form 表单'
            }]
        }, {
            value: 'data',
            label: 'Data',
            children: [{
                value: 'table',
                label: 'Table 表格'
            }, {
                value: 'tag',
                label: 'Tag 标签'
            }, {
                value: 'progress',
                label: 'Progress 进度条'
            }, {
                value: 'tree',
                label: 'Tree 树形控件'
            }, {
                value: 'pagination',
                label: 'Pagination 分页'
            }, {
                value: 'badge',
                label: 'Badge 标记'
            }]
        }, {
            value: 'notice',
            label: 'Notice',
            children: [{
                value: 'alert',
                label: 'Alert 警告'
            }, {
                value: 'loading',
                label: 'Loading 加载'
            }, {
                value: 'message',
                label: 'Message 消息提示'
            }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
            }, {
                value: 'notification',
                label: 'Notification 通知'
            }]
        }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
            }, {
                value: 'tabs',
                label: 'Tabs 标签页'
            }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
            }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
            }, {
                value: 'steps',
                label: 'Steps 步骤条'
            }]
        }, {
            value: 'others',
            label: 'Others',
            children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
            }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
            }, {
                value: 'popover',
                label: 'Popover 弹出框'
            }, {
                value: 'card',
                label: 'Card 卡片'
            }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
            }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
            }]
        }]
    }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
            value: 'axure',
            label: 'Axure Components'
        }, {
            value: 'sketch',
            label: 'Sketch Templates'
        }, {
            value: 'jiaohu',
            label: '组件交互文档'
        }]
    }],
    PAYTYPE: [{
        label: '微信',
        value: '0',
    }, {
        label: '支付宝',
        value: '1',
    }, {
        label: '银行卡',
        value: '2',
    }],
    DATALIST: [{
        label: 'SEX',
        value: 'SEX',
    }, {
        label: 'STATE',
        value: 'STATE',
    }, {
        label: 'GRADE',
        value: 'GRADE',
    }]
}
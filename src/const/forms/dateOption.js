function getPickerOptions() {
    return {
        shortcuts: [{
            text: '最近一周',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近一个月',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近三个月',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
            }
        }]
    }
}
export default {
    labelWidth: 110,
    column: [{
        label: "日期范围",
        prop: "daterange",
        type: "daterange",
        startPlaceholder: '日期开始范围自定义',
        endPlaceholder: '日期结束范围自定义',
        pickerOptions: getPickerOptions()
    }, {
        label: "时间范围",
        value: 'timerange',
        type: 'timerange',
        startPlaceholder: '时间开始范围自定义',
        endPlaceholder: '时间结束范围自定义'
    }, {
        label: "日期时间范围",
        value: 'datetimerange',
        type: 'datetimerange',
        startPlaceholder: '时间开始范围自定义',
        endPlaceholder: '时间结束范围自定义',
        pickerOptions: getPickerOptions()
    }, {
        label: "日期",
        prop: "date",
        type: "date"
    }, {
        label: "时间",
        prop: "time",
        type: "time",
    }, {
        label: "日期时间",
        prop: "datetime",
        type: "datetime",
    }, {
        label: "周",
        prop: "week",
        type: "week",
        format: "yyyy 第 WW 周"
    }, {
        label: "月",
        prop: "month",
        type: "month",
    }, {
        label: "年",
        prop: "year",
        type: "year",
    }, {
        label: "多个日期",
        prop: "dates",
        type: "dates",
        format: "yyyy-MM-dd hh:mm:ss",
        valueFormat: "yyyy-MM-dd hh:mm:ss",
    }]
}
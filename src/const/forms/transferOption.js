const generateData = () => {
    const data = [];
    for (let i = 1; i <= 15; i++) {
        data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
        });
    }
    return data;
};
export default {
    column: [{
        label: '穿梭框',
        prop: 'shenfeng',
        component: 'AvueTransfer',
        dataType: 'array',
        span: 24,
        dicData: generateData()
    }]
}
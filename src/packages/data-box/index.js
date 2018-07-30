import DataBox from './src/data-box.vue';

/* istanbul ignore next */
DataBox.install = function(Vue) {
    Vue.component(DataBox.name, DataBox);
};

export default DataBox;
import FormTabs from './src/main';

/* istanbul ignore next */
FormTabs.install = function(Vue) {
    Vue.component(FormTabs.name, FormTabs);
};

export default FormTabs;
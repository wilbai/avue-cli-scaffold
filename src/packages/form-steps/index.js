import FormSteps from './src/main';

/* istanbul ignore next */
FormSteps.install = function(Vue) {
    Vue.component(FormSteps.name, FormSteps);
};

export default FormSteps;
import CrudRate from '../crud/src/crud-rate';

/* istanbul ignore next */
CrudRate.install = function(Vue) {
    Vue.component(CrudRate.name, CrudRate);
};

export default CrudRate;
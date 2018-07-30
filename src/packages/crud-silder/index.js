import CrudSilder from '../crud/src/crud-silder';

/* istanbul ignore next */
CrudSilder.install = function(Vue) {
    Vue.component(CrudSilder.name, CrudSilder);
};

export default CrudSilder;
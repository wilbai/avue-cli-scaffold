import CrudUpload from '../crud/src/crud-upload.vue';

/* istanbul ignore next */
CrudUpload.install = function(Vue) {
    Vue.component(CrudUpload.name, CrudUpload);
};

export default CrudUpload
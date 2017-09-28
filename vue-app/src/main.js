import Vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import vuex from 'vuex'
import VeeValidate, {
    Validator
} from 'vee-validate';
import veeValidateConfig from './vee-validate-config.js'
import _ from 'underscore'
import $ from 'jquery'
import baobao from './js/baobao'
import router from './router-config'
import index from './components/App.vue'


Vue.use(vueResource);
Vue.use(vueRouter);
Vue.use(vuex);
Vue.use(VeeValidate, veeValidateConfig);

Vue.use(baobao);
Vue.config.debug = 'true';

// 测试环境
Vue.prototype.$baseUrl = 'http://test.cvssp.cn/Consoles';

// 请求拦截器
// Vue.http.interceptors.push(function(request, next) {
//     request.headers.set('token', localStorage.getItem('controlCenter_tokenCode'));
//     next();
// });


new Vue({
    el: '#app',
    router,
    mounted() {

    },
    methods: {
    },
    render: h => h(index)
})

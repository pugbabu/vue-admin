/**
 * @description 项目主入口文件
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import {default as initStore} from './store/init-store';
import './plugins';
import api from './api'; // 引入接口请求文件
import moment from 'moment'; // 时间处理模块
import filterObj from './filters'; // 全局注册过滤器
import * as socketApi from './utils/socket'; // 全局挂载websocket请求
import utils from './utils'; // 引入公用方法js文件
Vue.config.productionTip = false;
Object.keys(filterObj).forEach(key => {
  Vue.filter(key, filterObj[key]);
});

Vue.prototype.$socket = socketApi;
Vue.prototype.$api = api;
Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;


/* eslint-disable no-new */
new Vue({
  router,
  store,
  created () {
    initStore();
  },
  render: h => h(App)
}).$mount('#app');

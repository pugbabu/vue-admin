

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
Vue.config.productionTip = false;

Object.keys(filterObj).forEach(key => {
  Vue.filter(key, filterObj[key]);
});

Vue.prototype.$socket = socketApi;
Vue.prototype.$api = api;
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  created () {
    initStore();
  },
  render: h => h(App)
}).$mount('#app');

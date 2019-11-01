

import Vue from 'vue';
import App from './App';
import router from './router';
import { store, initStore } from './store/index';
import './plugins';
import api from '@/api';
import moment from 'moment';
import filterObj from '@/filters';
// import api from '@/api/index1';
import * as socketApi from './utils/socket';
Vue.prototype.$socket = socketApi;
Vue.config.productionTip = false;

Object.keys(filterObj).forEach(key => {
  Vue.filter(key, filterObj[key]);
});
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

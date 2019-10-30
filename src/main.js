

import Vue from 'vue';
import App from './App';
import router from './router';
import { store, initStore } from './store/index';
import './plugins';
import api from '@/api';
Vue.config.productionTip = false;

Vue.prototype.$api = api;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  created () {
    initStore();
  },
  render: h => h(App)
}).$mount('#app');

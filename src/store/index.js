import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import deviceMonitor from './modules/device-monitor';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    app,
    deviceMonitor
  }
});

export default store;

import Vue from 'vue';
import store from './index';

export default function initStore() {
  store.commit('setUser', Vue.ss.get('user'));
  store.commit('setToken', Vue.ss.get('token'));
  store.commit('setOpLogs', Vue.ss.get('opLogs'));


}
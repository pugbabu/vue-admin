import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import app from './modules/app';
import permission from './modules/permission';

export { default as initStore } from './init-store';

Vue.use(Vuex);

const state = {
  collapsed: false,
  user: null,
  menus: [],
  token: ''
};

const getters = {
  collapsed: state => state.collapsed,
  user: state => state.user,
  menus: state => state.menus,
  token: state => state.token


};

const  mutations = {
  setCollapsed: (state, param) => {
    state.collapsed = param;
  },
  setUser: (state, param) => {
    Vue.ss.set('user', param);
    state.user = param;
  },
  setMenus: (state, param) => {
    Vue.ss.set('menus', param);
    state.menus = param;
  },
  setToken: (state, param) => {
    Vue.ss.set('token', param);
    state.token = param;
  }
};

const action = {
  
};

export const store = new Vuex.Store({
  modules: {
    app,
    // user,
    permission
  },
  state,
  mutations,
  actions: {},
  getters,
});

export default store;

import Vue from 'vue';
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

const mutations = {
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

const actions = {
  
};

export default {
  state,
  getters,
  mutations,
  actions
};
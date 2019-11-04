import Vue from 'vue';
const state = {
  opLogs: [], // 操作记录
};

const getters = {
  opLogs: state => state.opLogs
};

const mutations = {
  setOpLogs: (state, param) => {
    Vue.ss.set('opLogs', param);
    state.opLogs = param;
  },
};

const actions = {
  
};

export default {
  state,
  getters,
  mutations,
  actions
};
import Vue from "vue";
import Vuex from "vuex";
import { getlocal, setlocal } from "@/router/storeage";
const tokenKey = "toution_token";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: getlocal(tokenKey),
  },
  getters: {},
  mutations: {
    getUser(state, user) {
      state.user = user;
      setlocal(tokenKey, user);
    },
  },
  actions: {},
  modules: {},
});

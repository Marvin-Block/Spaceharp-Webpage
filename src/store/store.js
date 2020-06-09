// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: [],
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    logIn (state, payload) {
      state.user = payload
    },
    logOut (state, payload) {
      state.user = payload
    },
 },
  actions: {
    logIn (context, payload) {
      context.commit('logIn', payload)
    },
    logOut (context, payload) {
      context.commit('logOut', payload)
    },
  },
})

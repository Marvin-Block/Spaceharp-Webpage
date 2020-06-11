// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    accessToken: '',
    refreshToken: '',
    user: {},
  }
}

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.accessToken
    },
    getUser: state => {
      return state.user
    },
    getRefreshToken: state => {
      return state.refreshToken
    },
  },
  mutations: {
    SET_TOKEN: (state, accessToken) => {
      state.accessToken = accessToken
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_REFRESHTOKEN: (state, refreshToken) => {
      state.refreshToken = refreshToken
    },
    RESET: state => {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    login: ({ commit, dispatch }, { accessToken, user, refreshToken }) => {
      commit('SET_REFRESHTOKEN', refreshToken)
      commit('SET_TOKEN', accessToken)
      commit('SET_USER', user)
      // set auth header
      Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    },
    logout: ({ commit }) => {
      commit('RESET', '')
    },
  },
})

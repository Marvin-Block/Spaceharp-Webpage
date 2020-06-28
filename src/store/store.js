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
    LICENCE_KEY: 'emptyLicence',
    HWID: '',
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
    hasLicence: state => {
      return state.LICENCE_KEY
    },
    getHWID: state => {
      return state.HWID
    },
  },
  mutations: {
    SET_TOKEN: (state, accessToken) => {
      state.accessToken = accessToken
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_LICENCE: (state, LICENCE_KEY) => {
      state.LICENCE_KEY = LICENCE_KEY
    },
    SET_HWID: (state, HWID) => {
      state.HWID = HWID
    },
    SET_REFRESHTOKEN: (state, refreshToken) => {
      state.refreshToken = refreshToken
    },
    RESET: state => {
      Object.assign(state, getDefaultState())
    },
    SET_ACTIVE_LICENSE: (state, license) => {
      state.license = license
    },
  },
  actions: {
    authorize: ({ commit, dispatch }, { LICENCE_KEY, HWID }) => {
      commit('SET_LICENCE', LICENCE_KEY)
      commit('SET_HWID', HWID)
    },
    login: ({ commit, dispatch }, { accessToken, user, refreshToken, LICENCE_KEY, HWID }) => {
      commit('SET_REFRESHTOKEN', refreshToken)
      commit('SET_TOKEN', accessToken)
      commit('SET_USER', user)
      commit('SET_LICENCE', LICENCE_KEY)
      commit('SET_HWID', HWID)
      // set auth header
      Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    },
    logout: ({ commit }) => {
      commit('RESET', '')
    },
  },
})

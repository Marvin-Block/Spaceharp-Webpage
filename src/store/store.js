// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allChampions: [],
    champions: [],
    scripts: [],
  },
  getters: {
    champions: state => state.champions,
    scripts: state => state.scripts,
  },
  mutations: {
    changeAllChamps (state, payload) {
      state.allChampions = payload
    },
    changeChamps (state, payload) {
      state.champions = payload
    },
    changeScripts (state, payload) {
      state.scripts = payload
    },
 },
  actions: {
    changeChamps (context, payload) {
      context.commit('changeChamps', payload)
    },
    changeScripts (context, payload) {
      context.commit('changeScripts', payload)
    },
  },
})

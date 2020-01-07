import Vue from 'vue'
import Vuex from 'vuex'
import modeuleB from './moduleB/moduleB'
import modeuleA from './moduleA/moduleA'
import globalMutation from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    ...globalMutation
  },
  actions: {
  },
  modules: {
    a: modeuleA,
    b: modeuleB
  }
})

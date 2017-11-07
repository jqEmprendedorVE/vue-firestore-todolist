import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUser: null
  },
  mutations: {
    setActiveUser (state, user) {
      user
      ? state.activeUser = user
      : state.activeUser = null
    }
  }
})

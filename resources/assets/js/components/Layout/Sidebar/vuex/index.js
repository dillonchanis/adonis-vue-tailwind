import * as types from './mutation-types'

export default {
  namespaced: true,

  state: {
    open: true
  },

  actions: {
    toggle ({ commit }) {
      commit(types.SIDEBAR_TOGGLE)
    }
  },

  mutations: {
    [types.SIDEBAR_TOGGLE] (state) {
      state.open = !state.open
    }
  },

  getters: {
    /** Get current open state.  */
    open: state => state.open
  }
}

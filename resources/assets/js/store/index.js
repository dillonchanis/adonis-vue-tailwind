import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../app/Auth/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
})

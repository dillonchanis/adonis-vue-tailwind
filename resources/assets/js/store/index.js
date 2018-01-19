import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../app/Auth/vuex'
import sidebar from '@layout/Sidebar/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})

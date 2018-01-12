import localforage from 'localforage'
import store from './store'
import router from './router'
require('./bootstrap')

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: ''
})

window.Vue = require('vue')

Vue.component('app', require('./components/App.vue'))

store.dispatch('auth/setToken').then(() => {
  store.dispatch('auth/fetchUser').catch(() => {
    store.dispatch('auth/clearAuth')
    router.replace({ name: 'login' })
  })
}).catch(() => {
  store.dispatch('auth/clearAuth')
})

const app = new Vue({
    el: '#app',
    router
})

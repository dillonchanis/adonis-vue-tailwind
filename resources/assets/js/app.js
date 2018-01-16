import localforage from 'localforage'
import store from './store'
import router from './router'
require('./bootstrap')

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'app'
})

window.Vue = require('vue')

Vue.component('app', require('./components/App.vue'))

const app = new Vue({
    el: '#app',
    router,
    store
})

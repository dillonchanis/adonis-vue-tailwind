import Vue from 'vue'
import localforage from 'localforage'
import store from './store'
import router from './router'
require('./bootstrap')

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'app'
})

Vue.component('app', require('./App.vue'))

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  store
})

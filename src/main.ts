import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import firebase from 'firebase/app'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: 'AIzaSyCJLRSC3kd3y78hyYV2Yso_HvnL1B3b1Nk',
  authDomain: 'doc-gen-89538.firebaseapp.com',
  databaseURL: 'https://doc-gen-89538.firebaseio.com',
  projectId: 'doc-gen-89538',
  storageBucket: 'doc-gen-89538.appspot.com',
  messagingSenderId: '906893759026',
  appId: '1:906893759026:web:a664784463bf4a9525622b',
  measurementId: 'G-HLB38LLZBV'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

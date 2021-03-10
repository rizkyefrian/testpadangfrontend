import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { setHeaderToken } from '../utils/auth'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://localhost:8000/api/'
// axios.defaults.baseURL = 'https://testpadang.000webhostapp.com/api/'

Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

store.dispatch('get_user', token)
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})


import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false





//TEMPORARIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBhdWxvIEEgQmFuZGVpcmEiLCJlbWFpbCI6InBhdWxvMkBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE4NjIwNDgxLCJleHAiOjE2MTg4Nzk2ODF9.wXl-O4XMBiNuDDVJTh1M83SoFhmt6fhPVV9gfe1jCBo' 

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
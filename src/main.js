import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App.vue'
import store from './config/store'
import './config/bootstrap'
import './config/msgs'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!!
//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwODI1NzU4MywiZXhwIjoxNjA4MjYxMTgzLCJuYmYiOjE2MDgyNTc1ODMsImp0aSI6InE5cDlYcXMyalliSWFuRkkiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.L6OcRWBpnmVwIaFBhLWhxA8IYS2fC57P7t1_50Rg8Cs';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

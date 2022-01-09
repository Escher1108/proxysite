/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-01-08 23:28:19
 * @LastEditTime: 2022-01-09 11:56:18
 * @LastEditors: Do not edit
 * @FilePath: \proxysite\src\main.js
 * @Description: 耶斯莫拉
 */
import Vue from 'vue'
import App from './App.vue'

// 导入buefy
import buefy from './buefy'

import router from './router'

import './utils/request'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  buefy,
  router,
  render: h => h(App)
}).$mount('#app')

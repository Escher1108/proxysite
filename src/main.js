import Vue from 'vue'
import App from './App.vue'

// 导入buefy
import buefy from './buefy'

import router from './router'


Vue.config.productionTip = false

new Vue({
  buefy,
  router,
  render: h => h(App)
}).$mount('#app')

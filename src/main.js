import Vue from 'vue'
import App from './app'
import router from './includes/router.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

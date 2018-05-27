import Vue from 'vue'
import App from './app'
import router from './includes/router.js'

Vue.config.productionTip = false

router.beforeEach(function(from, to, next) {
  setTimeout(function() {
    window.scrollTo(0, 0)
    next()
  }, 100)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap')

import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

/* App sass */
import './assets/style/app.scss'
import 'expose-loader?$!expose-loader?jQuery!jquery'

/* App component */
import App from './components/App.vue'

/* Auth plugin */
import Auth from './auth'
Vue.use(Auth)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Attach the Vue instance to the window,
  // so it's available globally.
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})

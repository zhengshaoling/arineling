// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import filters from './filters'


Vue.config.productionTip = false
Object.keys(filters).forEach(key => Vue.filter(key,filters[key]))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  render: h=>h(App)
})

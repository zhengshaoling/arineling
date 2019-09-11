import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
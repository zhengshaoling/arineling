import Vue from 'vue'
import Element from 'element-ui'
import '@/styles/element-variables.scss'
import Cookies from 'js-cookie'
import i18n from '../lang'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

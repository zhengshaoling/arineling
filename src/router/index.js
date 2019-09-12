import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_'+ process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../layout'
const user = require('./user.js');
const arrRouter = [];
export const constantRouterMap = [
  {
    path: '/dashboard',
    // component: Layout,
    component: _import('Index/index'),
    hidden: true,
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: _import('Index/index')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('Login/index')
  }
]
constantRouterMap.push({
  path: '/404',
  component: _import('404'),
  hidden: true
});
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap.concat(user.router)
})

export const asyncRouterMap = arrRouter.concat();
// arrRouter.concat(user.router);
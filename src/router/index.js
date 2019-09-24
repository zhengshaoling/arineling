import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_'+ process.env.NODE_ENV)
Vue.use(Router)

import Layout from '@/layout'

// const user = require('./user.js');
const admin = require('./admin.js')

const arrRouter = [];
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: _import('Login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'Login',
    component: _import('Login/index'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: _import('Index/index'),
      meta: { title: '首页' }
    },
    {
      path: 'user',
      name: 'User',
      component: _import('User/list'),
      meta: {
        auth: false,
        title: '穿梭框'
      }
    }
    ]
  }
]
const addCtx = item => {
  item.path ='/srm/admin' + item.path;
  if (item.redirect !== undefined && item.redirect !== 'noredirect') {
    item.redirect ='/srm/admin' + item.redirect
  }
  return item;
};
constantRouterMap.map(addCtx)

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
  routes: constantRouterMap
})

export const asyncRouterMap = arrRouter.concat(admin.router);
asyncRouterMap.map(addCtx)
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NProgress from 'nprogress'

Vue.use(Router)
Vue.use(NProgress)


export default new Router({
  routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
  ]
})
// Router.beforeEach({to,from,next}) => {
//   NProgress.start();
//   next()
// }
// Router.afterEach({to,from}) => {
//   NProgress.done()
// }

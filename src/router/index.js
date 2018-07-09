import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index'
import Demo from '@/pages/demo'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: resolve => require(['../page/login/index'], resolve)
    // }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// pages
import Login from '../pages/Login'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

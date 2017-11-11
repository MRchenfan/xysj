// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import { AjaxPlugin } from 'vux'
import store from './store'

Vue.use(AjaxPlugin)
Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
try {

  if (cordova) {
    console.log('cordova')
  }

  document.addEventListener('deviceready', () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app-box')
  }, false)

} catch(err) {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app-box')
}

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
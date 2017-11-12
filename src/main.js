// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)
Vue.use(MintUI)

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
    store,
    render: h => h(App)
  }).$mount('#app-box')
}

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  // MintUI.Indicator.open()
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
  // MintUI.Indicator.close()  
})
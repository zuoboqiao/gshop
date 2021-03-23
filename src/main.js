import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../static/css/reset.css"

Vue.config.productionTip = false


// 解决 路由路径点击重复 问题
import VueRouter from 'vue-router'
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error=> error)}
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)}


new Vue({
  router,  // 使用vue-router
  store,   // 使用vuex
  render: h => h(App)
}).$mount('#app')

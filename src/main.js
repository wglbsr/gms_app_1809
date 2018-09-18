// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import axios from 'axios'

//懒加载
const generatorTable = r => require.ensure([], () => r(require('./components/generator/generatorTable.vue')), 'generatorTable');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/generatorTable',
    name: 'generatorTable',
    component: generatorTable
  },


]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

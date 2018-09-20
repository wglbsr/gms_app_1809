// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import {
  Actionsheet, XInput, XButton, Grid, GridItem, XTable, LoadMore, Icon, XCircle, Group,
  XImg, Alert, Toast, XDialog, ButtonTab, Tabbar, TabbarItem, Divider, Confirm, Cell,
  ButtonTabItem, XHeader, ViewBox, Loading, LoadingPlugin, ToastPlugin, Scroller
} from 'vux'

Vue.component('view-box', ViewBox);
Vue.component('actionsheet', Actionsheet);
Vue.component('x-input', XInput);
Vue.component('x-button', XButton);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('x-table', XTable);
Vue.component('x-img', XImg);
Vue.component('alert', Alert);
Vue.component('toast', Toast);
Vue.component('x-dialog', XDialog);
Vue.component('button-tab', ButtonTab);
Vue.component('button-tab-item', ButtonTabItem);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('x-header', XHeader);
Vue.component('toast', Toast);
Vue.component('loading', Loading);
Vue.component('scroller', Scroller);
Vue.component('loadMore', LoadMore);
Vue.component('divider', Divider);
Vue.component('confirm', Confirm);
Vue.component('icon', Icon);
Vue.component('x-circle', XCircle);
Vue.component('cell', Cell);
Vue.component('group', Group);

import Home from './components/Home'
import API_DYNY from "./DYNY_GMS_API.vue"
import './assets/style/globle.css'

Vue.prototype.API_DYNY = API_DYNY;
//懒加载 Login generatorDetail
const generatorTable = r => require.ensure([], () => r(require('./components/generator/generatorTable.vue')), 'generatorTable');
const Login = r => require.ensure([], () => r(require('./components/Login.vue')), 'generator/');
const generatorDetail = r => require.ensure([], () => r(require('./components/generator/generatorDetail.vue')), 'generatorDetail');
const Content = r => require.ensure([], () => r(require('./components/coms/Content.vue')), 'Content');
const generateTable = r => require.ensure([], () => r(require('./components/generate/generateTable.vue')), 'generateTable');
const alarmTable = r => require.ensure([], () => r(require('./components/alarm/alarmTable.vue')), 'alarmTable');
const generatorLocations = r => require.ensure([], () => r(require('./components/location/generatorLocations.vue')), 'generatorLocations');

/*****!!!!!!******打包需要改为 false*********!!!!********/
let dev_mode = false;
// let dev_mode = true;
/*****!!!!!!******打包需要改为 false*********!!!!********/

if (dev_mode) {
  Vue.use(VueRouter);
  Vue.use(VueResource);
}

Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
// }
Vue.filter('keepHowManyNum', function (hours, keppNum) {
  if (isNaN(hours) || !hours) {
    hours = 0;
  }
  if (!keppNum) {
    keppNum = 1;
  }
  let temp = Math.pow(10, keppNum);
  let result = Math.round(Number(hours) * temp) / temp;
  return result;
});

Vue.filter('translateCurrent', function (current) {
  let translatedCurrent = ((100 * Math.abs(current - 2.5)) / 0.625) - 3.2;
  let finalCurrent = translatedCurrent >= 100 || translatedCurrent <= 0 ? 0 : translatedCurrent;
  return finalCurrent;
});
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/generatorTable',
        name: 'generatorTable',
        component: generatorTable
      },
      {
        path: '/generatorDetail',
        name: 'generatorDetail',
        component: generatorDetail
      }, {
        path: '/Content',
        name: 'Content',
        component: Content
      }, {
        path: '/generateTable',
        name: 'generateTable',
        component: generateTable
      }, {
        path: '/alarmTable',
        name: 'alarmTable',
        component: alarmTable
      }, {
        path: '/generatorLocations',
        name: 'generatorLocations',
        component: generatorLocations
      },
      //generatorLocations
    ],
  },
  {
    path: '/Login',
    component: Login
  },


]

const router = new VueRouter({
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth)) {
//     if (sessionStorage.getItem("user") !== null) {
//       next()
//     } else {
//       window.alert("请先登录!");
//       next(vm => {
//         vm.$router.push("/login");
//       })
//     }
//   } else {
//     next()
//   }
// });

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

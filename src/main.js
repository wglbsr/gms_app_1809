// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import {
  Actionsheet, XInput, XButton, Grid, GridItem, XTable, LoadMore, Icon, XCircle, Group, PopupRadio,
  XImg, Alert, Toast, XDialog, ButtonTab, Tabbar, TabbarItem, Divider, Confirm, Cell, Picker, PopupPicker,
  ButtonTabItem, XHeader, ViewBox, Loading, LoadingPlugin, ToastPlugin, Scroller, Datetime
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
Vue.component('datetime', Datetime);
Vue.component('picker', Picker);
Vue.component('popup-radio', PopupRadio);
Vue.component('popup-picker', PopupPicker);
//popup-picker

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
const myInfo = r => require.ensure([], () => r(require('./components/myself/myInfo.vue')), 'myInfo');
const changePassword = r => require.ensure([], () => r(require('./components/myself/changePassword.vue')), 'changePassword');

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
    meta: {
      title: '油机管理系统'
    },
    children: [
      {
        path: '/generatorTable',
        name: 'generatorTable',
        component: generatorTable,
        meta: {
          title: '油机列表'
        }
      },
      {
        path: '/generatorDetail',
        name: 'generatorDetail',
        component: generatorDetail,
        meta: {
          title: '油机详情'
        }
      }, {
        path: '/Content',
        name: 'Content',
        component: Content,
        meta: {
          title: '首页'
        }
      }, {
        path: '/generateTable',
        name: 'generateTable',
        component: generateTable,
        meta: {
          title: '发电记录'
        }
      }, {
        path: '/alarmTable',
        name: 'alarmTable',
        component: alarmTable,
        meta: {
          title: '告警记录'
        }
      }, {
        path: '/generatorLocations',
        name: 'generatorLocations',
        component: generatorLocations,
        meta: {
          title: '全站地图'
        }
      }, {
        path: '/myInfo',
        name: 'myInfo',
        component: myInfo,
        meta: {
          title: '个人信息'
        }
      }, {
        path: '/changePassword',
        name: 'changePassword',
        component: changePassword,
        meta: {
          title: '修改密码'
        }
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
router.beforeEach((to, from, next) => {
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
  if (to.path === '/Login') {
    next()
  } // 如果即将进入登录路由，则直接放行
  else {   //进入的不是登录路由
    if (!sessionStorage.getItem('user')) {
      next({path: '/Login'})
    }
    //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
    else {
      next()
    }
  }
  //如果不需要登录验证，或者已经登录成功，则直接放行
});

/**
 * 拦截器
 */
Vue.http.interceptors.push((request, next) => {
  // let username = sessionStorage.getItem("user");
  // if (!username) {
  //   router.push("/Login");
  // }
  next((response) => {
    return response;

  });
});

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

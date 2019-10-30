/**
 * @description 路由配置
 * @description 集成进度条插件，当路由切换时，顶部出现进度条
 * @author dalei 
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // progress bar style
Vue.use(Router);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['login', '404']; // no redirect whitelist
const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  // const token = Vue.ss.get('token');
  // if (token) {
  //   if (to.name === 'login') {
  //     next('/');
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (whiteList.includes(to.name)) {
  //     next();
  //   } else {
  //     next({path: '/login'});

  //   }
  // }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
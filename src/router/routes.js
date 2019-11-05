import {BasicLayout, ViewLayout} from '@/layout/index.js';

const routes = [
  {
    path: '/mss-login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/error',
    name: 'error',
    redirect: '/error/404',
    component: ViewLayout,
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/pages/error/404.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'index',
    redirect: '/device/ats',
    component: BasicLayout,
    children: [
      {
        path: '/permission',
        name: 'permission',
        component: () => import('@/pages/permission')
      },
      {
        path: 'device',
        name: 'device',
        component: ViewLayout,
        children: [
          {
            path: 'ats',
            name: 'ats',
            component: () => import('@/pages/device-monitor/ats')
          },
          {
            path: 'zc',
            name: 'zc',
            component: () => import('@/pages/device-monitor/zc')
          }
        ]
      }
    ]
  }
];
export default routes;
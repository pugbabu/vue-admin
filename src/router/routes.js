import {BasicLayout, ViewLayout} from '@/layout/index.js';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
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
          }
        ]
      },
      {
        path: 'sdm',
        name: 'sdm',
        component: ViewLayout,
        children: [
          {
            path: 'cc',
            name: 'sdm-cc',
            component: () => import('@/pages/sdm/cc')
          },
          {
            path: 'zc',
            name: 'sdm-zc',
            component: () => import('@/pages/sdm/zc')

          }
        ]
      },
      {
        path: 'ccm',
        name: 'ccm',
        component: ViewLayout,
        children: [
          {
            path: 'cc',
            name: 'ccm-cc',
            component: () => import('@/pages/ccm/cc')
          },
          {
            path: 'zc',
            name: 'ccm-zc',
            component: () => import('@/pages/ccm/zc')

          }
        ]
      }
    ]
  }
];
export default routes;
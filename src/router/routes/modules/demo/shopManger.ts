import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const shopManger: AppRouteModule = {
  path: '/shopManger',
  name: 'shopManger',
  component: LAYOUT,
  redirect: '/shopManger/list',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    // title: t('routes.demo.shopManger.moduleName'),
    title: '商品管理',
  },
  children: [
    {
      path: 'list',
      name: 'shopList',
      meta: {
        // title: t('routes.demo.shopManger.account'),
        title: '商品列表',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/shop-manger/list/index.vue'),
    },
    {
      path: 'shopManger_detail/:id',
      name: 'shopMangerDetail',
      meta: {
        hideMenu: true,
        title: '商品详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shopManger/list',
      },
      component: () => import('@/views/demo/shop-manger/desc/high/index.vue'),
    },
    {
      path: 'orderList',
      name: 'orderList',
      meta: {
        // title: t('routes.demo.shopManger.account'),
        title: '订单列表',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/shop-manger/order/index.vue'),
    },
    {
      path: 'orderList_detail/:id',
      name: 'orderListDetail',
      meta: {
        hideMenu: true,
        title: '订单列表详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/shopManger/orderList',
      },
      component: () => import('@/views/demo/shop-manger/desc/order/index.vue'),
    },
  ],
};

export default shopManger;

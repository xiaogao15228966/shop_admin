import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    // title: t('routes.demo.system.moduleName'),
    title:'商品管理'
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        // title: t('routes.demo.system.account'),
        title:'商品列表',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/system/account/index.vue'),
    },
    {
      path: 'vxeTableAccount',
      name: 'VxeTableAccountManagement',
      meta: {
        // title: t('routes.demo.system.vxeTableAccount'),
        title:'分类管理',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/system/vxe-account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        // title: t('routes.demo.system.account_detail'),
        title:'订单列表',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('@/views/demo/system/account/AccountDetail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.demo.system.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/role/index.vue'),
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.demo.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/menu/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.demo.system.dept'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/dept/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/password/index.vue'),
    },
  ],
};

export default system;

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
    title:'店铺设置'
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        // title: t('routes.demo.system.account'),
        title: '店铺资料',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/system/account/index.vue'),
    },
    {
      path: 'vxeTableAccount',
      name: 'VxeTableAccountManagement',
      meta: {
        // title: t('routes.demo.system.vxeTableAccount'),
        title: '账户设置-转账操作',
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
        title: '装修管理',
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
        // title: t('routes.demo.system.role'),
        title: '模块管理',
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/role/index.vue'),
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        // title: t('routes.demo.system.menu'),
        title: '导入业态',
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/menu/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        // title: t('routes.demo.system.dept'),
        title: '店铺公告',
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

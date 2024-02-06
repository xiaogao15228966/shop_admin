import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const setting: AppRouteModule = {
  path: '/setting',
  name: 'Setting',
  component: LAYOUT,
  redirect: '/setting/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    // title: t('routes.demo.setting.moduleName'),
    title: '店铺设置',
  },
  children: [
    {
      path: 'StoreInformation',
      name: 'StoreInformation',
      meta: {
        // title: t('routes.demo.setting.account'),
        title: '店铺资料',
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/page/account/center/index.vue'),
    },
    {
      path: 'step',
      name: 'FormStepPage',
      component: () => import('@/views/demo/page/form/step/index.vue'),
      meta: {
        title: '转账操作',
      },
    },
    {
      path: 'accountSetting',
      name: 'accountSetting',
      component: () => import('@/views/demo/page/account/setting/index.vue'),
      meta: {
        title: '账户设置',
      },
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        // title: t('routes.demo.setting.account_detail'),
        title: '装修管理',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/setting/account',
      },
      component: () => import('@/views/demo/setting/account/AccountDetail.vue'),
    },
    {
      path: 'ShopNotices',
      name: 'ShopNotices',
      meta: {
        // title: t('routes.demo.setting.dept'),
        title: '店铺公告',
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/page/result/success/index.vue'),
    },
  ],
};

export default setting;

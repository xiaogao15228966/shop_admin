export interface ListItem {
  title: string;
  icon: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const tags: string[] = [
  '很有想法的',
  '专注设计',
  '低价格',
  'vip特惠',
  '物美价廉',
  '男女同搭配',
  '国际时尚',
];

export const teams: ListItem[] = [
  {
    icon: 'ri:alipay-fill',
    title: '商家搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '商家年团',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: '商家设计',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: '商家日常',
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: '商家搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: '商家日常',
    color: '#ff4000',
  },
];

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: '交互商家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '某某某商家事业群',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '成都市武侯区',
  },
];

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: '热门商品',
    component: 'Article',
  },
  {
    key: '2',
    name: '低价商品',
    component: 'Application',
  },
  {
    key: '3',
    name: '活动商品',
    component: 'Project',
  },
];

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const articleList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: '四川海水鱼商家',
      description: ['商家', '热门推销', '春节大卖'],
      content: '基于四川海水鱼商家的服务宗旨，想不赚钱都难！。',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const applicationList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: '四川海水鱼商家',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    });
  }
  return result;
})();

export const projectList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: '四川海水鱼商家',
      content: '基于四川海水鱼商家的服务宗旨，想不赚钱都难！。',
    });
  }
  return result;
})();

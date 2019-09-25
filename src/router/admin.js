const _import = require('./_import_' + process.env.NODE_ENV);
import Layout from '@/layout';

export const router = [
  {
    path: '/odr',
    component: Layout,
    name: '采购管理',
    children: [
      {
        path: 'order/list',
        name: 'OrderList',
        meta: {
          title: '采购单管理'
        },
        component: _import('admin/odr/order/list')
      }
    ]
  },
  {
    path: '/gds',
    component: Layout,
    name: '商品管理',
    children: [
      {
        path: 'category/list',
        name: 'CategoryList',
        meta: {
          title: '商品分类'
        },
        component: _import('admin/gds/category/list')
      }
    ]
  },
  {
    path: '/srm',
    component: Layout,
    name: 'SRM系统设置',
    redirect: '/srm/index',
    children: [
      {
        path: 'index',
        name: 'SRMList',
        meta: {
          title: 'SRM系统列表'
        },
        component: _import('srm/index')
      }
    ]
  },
  {
    path: '/usr',
    component: Layout,
    // name: '',
    children: [
      {
        path: 'corporate/list',
        name: 'UsrCorporateList',
        meta: {
          title: '企业信息管理'
        },
        component: _import('User/list')
      },
      {
        path: 'user/list',
        name: 'UserList',
        meta: {
          title: '企业用户管理'
        },
        component: _import('Index/index')
      }
    ]
  }
];

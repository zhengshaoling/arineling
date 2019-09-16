import request from '@/utils/request';
// import axios from 'axios'
// this.axios = axios;

const auth = '/auth';
const srm = '/srm';

/**
 * 登录
 * @param {*} account
 * @param {*} password
 */
export function loginByUsername(account, password) {
  const data = {
    account,
    password
  };
  return request({
    url: 'auth/jwt/admin/token',
    method: 'post',
    data
  });
}

/**
 * 登出
 */
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

/**
 * 登录用户信息
 * @param {*} token
 */
export function getUserInfo(token) {
  return request({
    url: auth + '/protected/user/getLoginUser',
    method: 'get',
    params: {
      token
    }
  })
}

/**
 * SRM系统信息
 * @param {*} obj
 */
export function getSrmSetupInfo(obj) {
  return request({
    url: srm + '/srm/getSrmSetupInfo',
    method: 'get',
    params: obj
  })
}

/**
 * 菜单
 */
export function getAuthorizedItem() {
  return request({
    url: auth + '/protected/structure/getAuthorizedItem'
  })
}

/**
 * 按钮权限
 */
export function getAuthorizedBtnAuthCode() {
  return request({
    url: auth + '/protected/structure/getAuthorizedBtnAuthCode'
  })
}


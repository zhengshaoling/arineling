import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  showLoading: true
});

// 配置拦截器
service.interceptors.request.use(
  config => {
    if (config.headers.showLoading) {
      NProgress.start()
      delete config.headers.showLoading
    }
    if (store.getters.token) {
      config.headers['Authorization'] = getToken();
    }
    return config;
  },
  error => {
    // Do something with request
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    NProgress.done()
    const res = response.data;
    // 导出
    const headers = response.headers;
    if (headers['content-type'] === 'application/octet-stream') {
      return response;
    } else if (res.errCode !== '0000') {
      // token过期或无效
      if (res.errCode === 'AUTH1001' || res.errCode === 'AUTH1002' || res.errCode === 'AUTH1003') {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      Message({
        message: res.errMsg,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject('error');
    } else {
      // 后端会存在两种数据响应字段
      const resData = res.datas;
      return resData || res.data || res;
    }
  },
  error => {
    NProgress.done()
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service

import request from '@/utils/request'

const odr = '/odr/protected'

export function getTableList(data) {
  return request({
    url: odr + '/reject/list',
    method: 'post',
    data
  });
}
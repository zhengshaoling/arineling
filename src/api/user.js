import request from '@/utils/request';
const odr = '/odr/protected';

export default({
  test() {
    return request.get('https://jsonplaceholder.typicode.com/todos/1', {
      headers: { showLoading: false }
    })
  }
})

export function lineChartData(data) {
  return request({
    url: odr + '/order/lineChartData',
    method: 'post',
    data
  });
}
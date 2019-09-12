import request from '../utils/request'

export default({
  test() {
    return request.get('https://jsonplaceholder.typicode.com/todos/1', {
      headers: { showLoading: false }
    })
  }
})
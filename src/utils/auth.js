import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取Cookies值
export function getPerm(key) {
  return Cookies.get(key)
}

export function setPerm(key, val) {
  return Cookies.set(key, val)
}

export function removePerm(key) {
  return Cookies.remove(key)
}

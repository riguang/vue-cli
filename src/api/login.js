import $axios from '@/api/axios'

export const login = (username, password) => {
  return $axios({
    url: '',
    method: 'post',
    params: {username, password}
  })
}

export const register = (username, password, email) => {
  return $axios({
    url: '',
    method: 'post',
    params: {username, password, email}
  })
}

export const forgetPwd = (email) => {
  return $axios({
    url: '',
    method: 'post',
    params: {email}
  })
}

export const updatePwd = (username, password) => {
  return $axios({
    url: '',
    method: 'put',
    params: {username, password}
  })
}

export const logout = (accesstoken, refreshToken) => {
  return $axios({
    url: '',
    method: 'post',
    params: { accesstoken, refreshToken }
  })
}

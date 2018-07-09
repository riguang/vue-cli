import $axios from '@/api/axios'

export const getBaseMsg = () => {
  return $axios({
    url: '',
    method: 'get',
    params: {}
  })
}

export const getPersonalMsg = (uid) => {
  return $axios({
    url: '',
    method: 'get',
    params: {}
  })
}
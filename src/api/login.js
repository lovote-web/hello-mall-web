import request from '@/utils/request'

export function login(username,password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

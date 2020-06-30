import request from '@/utils/request'

export function createCart(data) {
  return request({
    url: '/cart/create',
    method : 'post',
    data: data
  })
}

export function deleteCart(id) {
  return request({
    url: '/cart/delete/'+id,
    method: 'get'
  })
}

export function getAllCart() {
  return request({
    url: '/cart/listAll',
    method: 'get'
  })
}

export function crOrder(data) {
  return request({
    url: '/order/create',
    method : 'post',
    data: data
  })
}

import request from '@/utils/request'

export function getListAll() {
  return request({
    url: '/product/listAll',
    method: 'get'
  })
}

export function createProduct(data) {
  return request({
    url: '/product/create',
    method: 'post',
    data: data
  })
}

export function deleteProduct(id) {
  return request({
    url: '/product/delete/'+id,
    method: 'get'
  })
}

export function updateProduct(id,data) {
  return request({
    url: '/product/update/'+id,
    method: 'post',
    data: data
  })
}

export function listProduct() {
  return request({
    url: '/product/list',
    method: 'get'
  })
}

export function getProduct(id) {
  return request({
    url: '/product/'+id,
    method: 'get'
  })
}

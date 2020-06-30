import request from '@/utils/request'

export function getOrderAll() {
  return request({
    url: '/order/listAll',
    methods: 'get'
  })
}

export function updateOrder(id,data) {
  return request({
    url: '/order/update/'+id,
    methods: 'post',
    data: data
  })
}

export function deleteOrder(id) {
  return request({
    url: '/order/delete/'+id,
    methods: 'get'
  })
}

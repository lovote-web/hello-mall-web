import request from '@/utils/request'

export function getBrandListAll() {
  return request({
    url: '/brand/listAll',
    methods: 'get'
  })
}

export function deleteBrand(id) {
  return request({
    url: '/brand/delete/'+id,
    methods: 'get'
  })
}

export function updateBrand(id,data) {
  return request({
    url: '/brand/update/'+id,
    methods: 'post',
    data: data
  })
}

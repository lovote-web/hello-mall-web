import request from '@/utils/request'

export function getCategoryListAll() {
  return request({
    url: '/categpory/listAll',
    methods: 'get'
  })
}

export function updateCategoryListAll(id,data) {
  return request({
    url: '/categpory/update/'+id,
    methods: 'post',
    data: data
  })
}

export function deleteCategory(id) {
  return request({
    url: '/categpory/delete/'+id,
    methods: 'get'
  })
}

export function createCategory(data) {
  return request({
    url: '/categpory/create',
    methods: 'post',
    data: data
  })
}

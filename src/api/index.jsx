import request from '../config/request'

export function fetchList(query) {
   return request({
     url: '/admin/tenant/list',
     method: 'get',
     params: query
   })
 }
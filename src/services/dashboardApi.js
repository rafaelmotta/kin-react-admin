import {
  request
} from './_request'

export function fetch(params) {
  return request({
    url: '/dashboard',
    params
  })
}

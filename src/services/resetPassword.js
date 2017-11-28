import {
  request
} from './_request'

export function create(data) {
  return request({
    method: 'POST',
    url: '/passwords/reset',
    data: {
      user: data
    }
  })
}

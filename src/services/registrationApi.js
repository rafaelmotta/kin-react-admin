import {
  request
} from './_request'

export function create(data) {
  return request({
    method: 'POST',
    url: '/sessions/sign_up',
    data: {
      user: data
    }
  })
}

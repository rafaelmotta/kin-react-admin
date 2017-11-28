import {
  request
} from './_request'

export function fetch() {
  return request({
    url: '/me'
  })
}

export function update(user) {
  return request({
    method: 'PUT',
    url: '/me',
    data: {
      user
    }
  })
}

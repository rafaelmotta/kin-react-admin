import {
  request
} from './_request'

export function fetch(params) {
  return request({
    url: '/users',
    params
  })
}

export function register(user) {
  return request({
    url: '/users',
    method: 'PUT',
    data: user
  })
}

export function update(user) {
  return request({
    url: `/users/${ user.id }`,
    method: 'PATCH',
    data: {
      user
    }
  })
}

export function destroy(user) {
  return request({
    url: `/users/${ user.id }`,
    method: 'DELETE'
  })
}

export function fetchOne(user) {
  return request({
    url: `/users/${ user.id }`
  })
}

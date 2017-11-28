import {
  request
} from './_request'

export function create(data) {
  return request({
    method: 'POST',
    url: '/sessions/sign_in',
    forceKeepSession: true,
    data: {
      user: data
    }
  })
}

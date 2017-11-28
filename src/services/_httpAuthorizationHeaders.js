import {
  store
} from '../index'

const getHttpAuthorizationHeaders = () => {
  let headers = {}
  const { me } = store.getState()

  if(me && me.data) {
    headers = {
      'X-Authorization-Email': me.data.email,
      'X-Authorization-Token': me.data.authentication_token
    }
  }

  return headers
}

export {
  getHttpAuthorizationHeaders
}

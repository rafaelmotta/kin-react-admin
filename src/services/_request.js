import axios from '../config/axios'
import {
  put,
  call
} from 'redux-saga/effects'

import {
  REQUEST_START,
  REQUEST_END,
  ALERT_ERROR
} from '../config/constants/actions'

import {
  getHttpAuthorizationHeaders
} from './_httpAuthorizationHeaders'

export const request = function*(options, extraOptions = {})  {
  yield put({ type: REQUEST_START })

  options.headers = getHttpAuthorizationHeaders()
  options.timeout = 15000

  const res = yield axios.request(options).then((res) => {
    return { response: res.data }
  }).catch((error) => {
    try {
      return { error: error.response.data.error }
    } catch(ex) {
      return { error: {
        code: 400, description: 'Não foi possível conectar com o servidor. Tente novamente mais tarde'
      }}
    }
  })

  yield put({ type: REQUEST_END })

  const resetSession = () => {
    if(!options.forceKeepSession === undefined) {
      return false
    }

    return res.error.code === 401 ? true : false
  }

  if(res.error) {
    yield put({ type: ALERT_ERROR, payload: {
      resetSession: resetSession(),
      description: res.error.description
    }})
  }

  return res
}

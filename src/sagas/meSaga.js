import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  fetch,
  update
} from '../services/meApi'

import {
  ALERT_SUCCESS,
  ME_REQUEST,
  ME_REQUEST_SUCCESS,
  ME_UPDATE_REQUEST,
  ME_UPDATE_REQUEST_SUCCESS
} from '../config/constants/actions'

const _fetch = function*(action) {
  const request =  yield call(fetch, action.payload)

  if(request.response) {
    yield put({ type: ME_REQUEST_SUCCESS, payload: request.response })
  }
}

const _update = function*(action) {
  const request =  yield call(update, action.payload)

  if(request.response) {
    yield put({ type: ME_UPDATE_REQUEST_SUCCESS, payload: request.response })

    const message = {
      description: 'Dados atualizados com sucesso'
    }
    yield put({ type: ALERT_SUCCESS, payload: message })
  }
}

const watchMeSaga = function*() {
  return yield [
    takeLatest(ME_REQUEST, _fetch),
    takeLatest(ME_UPDATE_REQUEST, _update),
  ]
}

export default watchMeSaga

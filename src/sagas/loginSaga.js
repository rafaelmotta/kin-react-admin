import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  create
} from '../services/loginApi'

import history from './../config/history'

import {
  ALERT_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  NAVIGATE
} from '../config/constants/actions'

import {
  URL_AFTER_LOGIN,
} from '../config/constants/routesCallback'

const _create = function*(action) {
  const request =  yield call(create, action.payload)

  if(request.response) {
    const name = request.response.data.first_name
    yield put({ type: ALERT_SUCCESS, payload: { description: `Seja bem-vindo(a), ${ name }`} })
    yield put({ type: LOGIN_REQUEST_SUCCESS, payload: request.response })
    yield call(history.push, URL_AFTER_LOGIN);
  }
}

const watchLoginSaga = function*() {
  return yield [
    takeLatest(LOGIN_REQUEST, _create)
  ]
}

export default watchLoginSaga

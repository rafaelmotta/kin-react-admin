import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  delay
} from 'redux-saga'

import history from './../config/history'

import {
  LOGOUT_REQUEST
} from '../config/constants/actions'

const _logout = function*(action) {
  yield delay(100)
  yield call(history.push, '/sign-in')
}

const watchLogoutSaga = function*() {
  return yield [
    takeLatest(LOGOUT_REQUEST, _logout)
  ]
}

export default watchLogoutSaga

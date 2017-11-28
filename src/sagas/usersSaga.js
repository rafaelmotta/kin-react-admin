import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  fetch,
  destroy
} from '../services/usersApi'

import {
  ALERT_SUCCESS,
  USERS_REQUEST,
  USERS_REQUEST_SUCCESS,
  USER_DELETE_REQUEST,
  USER_DELETE_REQUEST_SUCCESS
} from '../config/constants/actions'

import history from '../config/history'

const _fetch = function*(action) {
  const request = yield call(fetch, action.payload)

  if(request.response) {
    yield put({ type: USERS_REQUEST_SUCCESS, payload: request.response })
  }
}

const _delete = function*(action) {
  const request = yield call(destroy, action.payload)

  if(request.response) {
    yield put({ type: USER_DELETE_REQUEST_SUCCESS, payload: request.response })
  }
}

const watchUsersSaga = function*() {
  return yield [
    takeLatest(USERS_REQUEST, _fetch),
    takeLatest(USER_DELETE_REQUEST, _delete)
  ]
}

export default watchUsersSaga

import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  fetchOne,
  register,
  update
} from '../services/usersApi'

import {
  ALERT_SUCCESS,
  USERS_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_CREATE_REQUEST,
  USER_CREATE_REQUEST_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_REQUEST_SUCCESS,
  USER_RESET_REQUEST
} from '../config/constants/actions'

import history from '../config/history'

const _fetchOne = function*(action) {
  const request = yield call(fetchOne, action.payload)

  if(request.response) {
    yield put({ type: USER_DETAILS_REQUEST_SUCCESS, payload: request.response })
  }
}

const _reset = function*(action) {
  yield put({ type: USER_DETAILS_REQUEST_SUCCESS, payload: { data: null } })
}

const _register = function*(action) {
  const request = yield call(register, action.payload)

  if(request.response) {
    yield put({ type: USER_CREATE_REQUEST_SUCCESS, payload: request.response })
    yield put({ type: ALERT_SUCCESS, payload: { description: 'Cliente criado com sucesso.'} })
    yield put({ type: USERS_REQUEST })
    history.push('/admin/users/')
  }
}

const _update = function*(action) {
  const request = yield call(update, action.payload)

  if(request.response) {
    yield put({ type: USER_UPDATE_REQUEST_SUCCESS, payload: request.response })
    yield put({ type: ALERT_SUCCESS, payload: { description: 'Dados alterados com sucesso'} })
  }
}

const watchUserDetailsSaga = function*() {
  return yield [
    takeLatest(USER_DETAILS_REQUEST, _fetchOne),
    takeLatest(USER_CREATE_REQUEST, _register),
    takeLatest(USER_UPDATE_REQUEST, _update),
    takeLatest(USER_RESET_REQUEST, _reset)
  ]
}

export default watchUserDetailsSaga

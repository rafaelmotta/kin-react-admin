import {
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  REHYDRATE
} from '../config/constants/actions'

import history from './../config/history'

import {
  store
} from '../index'

const _redirect = function*(action) {
  const { me } = store.getState()

  if(me && me.data) {
    yield call(history.push, history.location.pathname)
  } else {
    yield call(history.push, '/sign-in')

  }
}

const watchPersistSaga = function*() {
  return yield [
    takeLatest(REHYDRATE, _redirect)
  ]
}

export default watchPersistSaga

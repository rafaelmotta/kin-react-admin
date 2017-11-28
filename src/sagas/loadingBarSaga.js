import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  REQUEST_START,
  REQUEST_END,
} from '../config/constants/actions'

import {
  SHOW_LOADING_BAR
} from '../config/constants/loadingBar'

import {
  showLoading,
  hideLoading
} from 'react-redux-loading-bar'

const _show = function*() {
  if(SHOW_LOADING_BAR) {
    yield put(showLoading())
  }
}

const _hide = function*() {
  if(SHOW_LOADING_BAR) {
    yield put(hideLoading())
  }
}

const watchLoadingBarSaga = function*() {
  return yield [
    takeLatest(REQUEST_START, _show),
    takeLatest(REQUEST_END, _hide),
  ]
}

export default watchLoadingBarSaga

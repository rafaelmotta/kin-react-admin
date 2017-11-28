import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import {
  fetch
} from '../services/dashboardApi'

import {
  DASHBOARD_REQUEST,
  DASHBOARD_REQUEST_SUCCESS
} from '../config/constants/actions'

const _fetch = function*(action) {
  const request =  yield call(fetch, action.payload)

  if(request.response) {
    yield put({ type: DASHBOARD_REQUEST_SUCCESS, payload: request.response })
  }
}

const watchDashboardSaga = function*() {
  return yield [
    takeLatest(DASHBOARD_REQUEST, _fetch)
  ]
}

export default watchDashboardSaga

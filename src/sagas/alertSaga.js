import {
  call,
  takeLatest,
  put
} from 'redux-saga/effects'

import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  LOGOUT_REQUEST
} from '../config/constants/actions'

import {
  notify
} from 'react-notify-toast'

const showErrorAlert = function*(action) {
  const { title, description } = action.payload

  if(Array.isArray(description)) {
    yield call(notify.show, description[0], 'error')
  } else {
    yield call(notify.show, description, 'error')
  }

  // Error 401 / 403 redirects user to login page
  if(action.payload.resetSession) {
    yield put({ type: LOGOUT_REQUEST })
  }
}

const showSuccessAlert = function*(action) {
  const { title, description } = action.payload
  yield call(notify.show, description, 'success')
}

const watchAlertSaga = function*() {
  return yield [
    takeLatest(ALERT_ERROR, showErrorAlert),
    takeLatest(ALERT_SUCCESS, showSuccessAlert),
  ]
}

export default watchAlertSaga

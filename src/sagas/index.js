import {
  fork
} from 'redux-saga/effects'

import watchAlertSaga from './alertSaga'
import watchDashboardSaga from './dashboardSaga'
import watchLoginSaga from './loginSaga'
import watchLogoutSaga from './logoutSaga'
import watchMeSaga from './meSaga'
import watchPersistSaga from './persistSaga'
import watchUserDetailsSaga from './userDetailsSaga'
import watchUsersSaga from './usersSaga'
import watchLoadingBarSaga from './loadingBarSaga'

const startForman = function*() {
  yield [
    fork(watchAlertSaga),
    fork(watchLoginSaga),
    fork(watchDashboardSaga),
    fork(watchLoginSaga),
    fork(watchLogoutSaga),
    fork(watchMeSaga),
    fork(watchUserDetailsSaga),
    fork(watchUsersSaga),
    fork(watchPersistSaga),
    fork(watchLoadingBarSaga)
  ]
}

export default startForman

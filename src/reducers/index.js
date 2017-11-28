import {
  combineReducers
} from 'redux'

import {
  loadingBarReducer
} from 'react-redux-loading-bar'

import { reducer as formReducer } from 'redux-form'
import meReducer from './meReducer'
import requestReducer from './requestReducer'
import dashboardReducer from './dashboardReducer'
import usersReducer from './usersReducer'
import userDetailsReducer from './userDetailsReducer'
import rehydratedReducer from './rehydratedReducer'

const reducers = combineReducers({
  me: meReducer,
  request: requestReducer,
  dashboard: dashboardReducer,
  users: usersReducer,
  userDetails: userDetailsReducer,
  rehydrated: rehydratedReducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
})

export default reducers

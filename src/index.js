import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import {
  Provider
} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {
  createLogger
} from 'redux-logger'
import {
  autoRehydrate,
  persistStore
} from 'redux-persist'

import reducers from './reducers'
import sagas from './sagas'
import {
  Router
} from 'react-router-dom'

import AppRouter from './containers/AppRouter'
import Notifications from 'react-notify-toast'
import LoadingBar from 'react-redux-loading-bar'
import history from './config/history'
import {
  startSentry
} from './config/sentry'

import {
  REDUX_PERSIST_WHITE_LIST_KEYS,
  REDUX_PERSIST_BLACK_LIST_KEYS
} from './config/constants/persistKeys'

import 'font-awesome/css/font-awesome.css'
import './App.css'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

export const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(logger, sagaMiddleware),
    autoRehydrate()
  )
)

sagaMiddleware.run(sagas)
startSentry()

const whitelist = REDUX_PERSIST_WHITE_LIST_KEYS
persistStore(store, { whitelist })

ReactDOM.render(
  <Router history={history}>
    <Provider store={this.store}>
      <div className="app-container">
        <LoadingBar />
        <Notifications />
        <AppRouter />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
)

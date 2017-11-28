import React from 'react'
import {
  connect
} from 'react-redux'

import PropTypes from 'prop-types'
import {
  Redirect,
  Route
} from 'react-router-dom'

import {
  store
} from '../../index'

import Private from '../Private'
import Session from '../Session'

const isAuthenticated = () => {
  const { me } = store.getState()

  if(me && me.data) {
    return true
  }

  return false
}

const isReady = () => {
  const { rehydrated } = store.getState()
  return rehydrated
}

const AppRouter = () => {
  if(!isReady()) {
    return null
  }

  if(isAuthenticated()) {
    return <Route component={ Private } />
  } else {
    return <Route component={ Session } />
  }
}

export default AppRouter

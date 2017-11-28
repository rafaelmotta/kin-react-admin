import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  BRAND_LOGO
} from '../../config/constants/brand'

import {
  publicRoutes
} from '../../config/routes'

import styles from './styles.css'

const Session = ({ props }) => {
  return(
    <div className="session-container">
      <img className="brand" src={ BRAND_LOGO } />
      <div className="session-inner">
        <Switch>
          {publicRoutes.map((r) =>
            <Route path={ r.path } component={ r.component } />
          )}
          <Redirect path="*" to="/sign-in" />
        </Switch>
      </div>
    </div>
  )
}

export default Session

import React from 'react'
import {
  Switch,
  Redirect
} from 'react-router-dom'

import {
  MainNavBar,
  SubNavBar,
  PrivateLayout
} from '../../config/components'

import {
  privateRoutes
} from '../../config/routes'

import styles from './styles.css'

const Private = ({ props }) => {
  return(
    <div className="private-container">
      <MainNavBar />
      <SubNavBar />
      <div className="content-container">
        <Switch>
          {privateRoutes.map((p) => {
            return(
              <PrivateLayout
                key={ p.path }
                path={ p.path }
                exact={ p.exact }
                component={ p.component }
                title={ p.title }
                icon={ p.icon }
                exact={ p.exact }
              />
            )
          })}
          <Redirect path="*" to="/admin/dashboard/main" />
        </Switch>
      </div>
    </div>
  )
}

export default Private

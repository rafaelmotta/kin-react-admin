import React from 'react'
import {
  Route,
} from 'react-router-dom'

import Topbar from '../Topbar'

import styles from './styles.css'

const Private = (props) => {
  const hasTopbar = props.title && props.icon
  const innerClass = hasTopbar ? 'content-inner content-inner-with-topbar' : 'content-inner'

  return(
    <div className="default-page-container">
      {hasTopbar && (
        <Topbar title={ props.title } icon={ props.icon } />
      )}
      <div className={innerClass}>
        <Route path={ props.path } component={ props.component } exact />
      </div>
    </div>
  )
}

export default Private

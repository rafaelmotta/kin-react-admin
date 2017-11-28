import React from 'react'
import PropTypes from 'prop-types'
import {
  NavLink
} from 'react-router-dom'

import styles from './styles.css'

class MainNavLinkItem extends React.Component {

  static propTypes = {
    path: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired
  }

  render() {
    const icon = `fa fa-${ this.props.icon }`

    if(this.props.path) {
      return(
        <NavLink exact className="main-nav-link-item" to={this.props.path} activeClassName="main-nav-link-item-active">
          <i className={icon}></i>
        </NavLink>
      )
    }

    return(
      <a className="main-nav-link-item" onClick={this.props.onClick}>
        <i className={icon}></i>
      </a>
    )
  }
}

export default MainNavLinkItem

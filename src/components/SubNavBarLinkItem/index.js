import React from 'react'
import PropTypes from 'prop-types'
import {
  NavLink
} from 'react-router-dom'

import {
  withRouter
} from 'react-router'

import styles from './styles.css'

class SubNavBarLinkItem extends React.Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const icon = `fa fa-${ this.props.icon }`

    return(
      <NavLink className="subnavbar-link-item" to={this.props.path} activeClassName="subnavbar-link-item-active">
        <div className="row">
          <div className="col-md-2">
            <i className={icon}></i>
          </div>
          <div className="col-md-10">
            <span className="title">
              {this.props.title}
            </span>
            <small>{this.props.description}</small>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default SubNavBarLinkItem

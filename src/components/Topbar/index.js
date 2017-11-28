import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class Topbar extends React.Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    chidren: PropTypes.element,
  }

  render() {
    const icon = `fa fa-${ this.props.icon }`

    return(
      <div className="topbar-container">
        <div className="topbar-inner">
          <i className={icon}></i>
          <span className="label">{this.props.title}</span>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Topbar

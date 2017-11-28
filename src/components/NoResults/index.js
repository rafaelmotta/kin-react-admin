import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class NoResults extends React.Component {

  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    icon: 'list',
    text: 'value',
  }

  render () {
    const iconClass = `fa fa-${ this.props.icon }`

    return(
      <div className="no-results-container">
        <i className={iconClass}></i>
        <p className="no-results-text">{this.props.text}</p>
      </div>
    )
  }
}

export default NoResults

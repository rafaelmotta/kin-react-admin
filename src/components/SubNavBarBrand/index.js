import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import styles from './styles.css'

class SubNavBarBrand extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="subnavbar-brand">
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default SubNavBarBrand

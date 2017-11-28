import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class DashboardItem extends React.Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return(
      <div className="dashboard-item-container">
        <div className="dashboard-header-container">
          <h3>
            {this.props.title}
          </h3>
        </div>
        <div className="dashboard-inner-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

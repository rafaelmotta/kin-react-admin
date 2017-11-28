import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class DashboardInfo extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    label: PropTypes.string,
    color: PropTypes.string
  }

  get valueColor() {
    if(this.props.valueColor) {
      return {
        color: this.props.valueColor
      }
    }
  }

  render() {
    return(
      <div className="dashboard-info-container">
        <h3 className="title">
          {this.props.title}
        </h3>
        <span className="value" style={this.valueColor}>
          {this.props.value}
        </span>
        <span className="label">
          {this.props.label}
        </span>
      </div>
    )
  }
}

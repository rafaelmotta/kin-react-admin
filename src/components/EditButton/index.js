import React from 'react'
import PropTypes from 'prop-types'

class EditButton extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: 'pencil'
  }

  render () {
    const icon = `fa fa-${ this.props.icon }`

    return(
      <button className="btn btn-warning btn-xs" onClick={this.props.onClick}>
        <i className={icon}></i>
      </button>
    )
  }
}

export default EditButton;

import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class SubmitButton extends React.Component {

  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
  }

  static defaultProps = {
    icon: 'save',
    label: 'Salvar'
  }

  render() {
    const icon = `fa fa-${ this.props.icon }`

    return(
      <div className="submit-button-container">
        <button className="btn btn-success" { ...this.props }>
          <i className="fa fa-save"></i>
          {this.props.label}
        </button>
      </div>
    )
  }
}

export default SubmitButton

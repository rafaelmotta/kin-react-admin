import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class SlatSearch extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  render () {
    return(
      <div>
        <div className="slats-container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <div className="input-group-addon">
                    {this.props.label}
                  </div>
                  <input
                    type="search"
                    className="form-control"
                    value={this.props.value}
                    onChange={this.handleChange.bind(this, 'value')}
                    placeholder={this.props.placeholder}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr   />
      </div>
    )
  }
}

export default SlatSearch

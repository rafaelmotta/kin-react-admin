import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'

import {
  Field,
  reduxForm
} from 'redux-form'

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

class RecoverPasswordForm extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <Field
            className="form-control"
            name="Digite seu email"
            placeholder="Digite seu email"
            component="input"
            type="text"
          />
        </FormGroup>
        <button className="btn btn-primary btn-block btn-lg" type="submit">
          Enviar
        </button>
      </form>
    )
  }
}

RecoverPasswordForm = reduxForm({
  form: 'recoverPasswordForm'
})(RecoverPasswordForm)

export default RecoverPasswordForm

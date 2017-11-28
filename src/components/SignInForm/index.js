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

class SignInForm extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup controlId="email">
          <Field
            className="form-control"
            name="email"
            placeholder="E-mail"
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="password">
          <Field
            className="form-control"
            name="password"
            placeholder="Senha"
            component="input"
            type="password"
          />
        </FormGroup>
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          <span className="label">
            Entrar
          </span>
        </button>
      </form>
    )
  }
}

SignInForm = reduxForm({
  form: 'signInForm'
})(SignInForm)

export default SignInForm

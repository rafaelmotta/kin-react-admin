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

import {
  SubmitButton
} from '../../config/components'

class UserForm extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>
            Nome
          </ControlLabel>
          <Field
            className="form-control"
            name="name"
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>
            Telefone
          </ControlLabel>
          <Field
            className="form-control"
            name="cellphone"
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>
            E-mail
          </ControlLabel>
          <Field
            className="form-control"
            name="email"
            disabled={true}
            component="input"
            type="text"
          />
        </FormGroup>
        <hr />
        <SubmitButton type="submit">
          Salvar
        </SubmitButton>
      </form>
    )
  }
}

UserForm = reduxForm({
  form: 'userForm'
})(UserForm)

UserForm = connect(
  store => ({
    initialValues: store.userDetails.data
  })
)(UserForm)

export default UserForm

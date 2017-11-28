import React from 'react'
import {
  connect
} from 'react-redux'

import {
  Field,
  reduxForm
} from 'redux-form'

import {
  FormGroup,
  ControlLabel
} from 'react-bootstrap'

import {
  SubmitButton
} from '../../config/components'

class ProfileForm extends React.Component {

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

ProfileForm = reduxForm({
  form: 'profileForm'
})(ProfileForm)

ProfileForm = connect(
  store => ({
    initialValues: store.me.data
  })
)(ProfileForm)

export default ProfileForm

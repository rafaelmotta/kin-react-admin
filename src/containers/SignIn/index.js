import React from 'react'
import {
  connect
} from 'react-redux'

import {
  loginRequest
} from '../../actions/loginActions'

import {
  SignInForm
} from '../../config/components'

import styles from './styles.css'

class SignIn extends React.Component {

  handleSubmit(e) {
    e.preventDefault()

    const { signInForm } = this.props.form

    this.props.loginRequest({
      email: signInForm.values.email,
      password: signInForm.values.password
    })
  }

  render() {
    return (
      <div className="signin-container">
        <h3>Login</h3>
        <SignInForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <a tabIndex={4} href="/recover-password">
          Esqueci minha senha
        </a>
      </div>
    )
  }
}

const mapStateToProps = ({ form }) => {
	return {
    form
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
    loginRequest: (data) => {
      dispatch(loginRequest(data))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

import React from 'react'
import {
  connect
} from 'react-redux'

import {
  RecoverPasswordForm
} from '../../config/components'

class RecoverPassword extends React.Component {

  render() {
    return (
      <div className="recover-password-container">
        <h3>Recuperar senha</h3>
        <RecoverPasswordForm />
        <a href="/signin">
          Voltar para o Login
        </a>
      </div>
    )
  }
}

const mapStateToProps = () => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword)

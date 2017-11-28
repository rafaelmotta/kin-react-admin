import React from 'react'
import {
  connect
} from 'react-redux'

import {
  userCreateRequest
} from '../../actions/userDetailsActions'

import {
  Topbar,
  SubmitButton,
  DriverForm
} from '../../config/components'

import {
  Field,
  reduxForm
} from 'redux-form'

import history from '../../config/history'
import styles from './styles.css'

class NewDriver extends React.Component {

  handleSubmit(values) {
    this.props.userCreateRequest({
      name: values.name,
      cellphone: values.cellphone,
      email: values.email
    })
  }

  handleBack() {
    history.push('/admin/users/drivers')
  }

  render () {
    return(
      <div className="driver-details-container">
        <Topbar title="Novo motociclista" icon="motorcycle">
          <button className="btn btn-sm btn-default" onClick={this.handleBack.bind(this)}>
            Voltar
          </button>
        </Topbar>
        <div className="driver-details-content">
          <DriverForm
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
    userCreateRequest: (data) => {
      dispatch(userCreateRequest(data))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDriver)

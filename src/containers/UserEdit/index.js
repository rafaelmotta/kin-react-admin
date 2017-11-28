import React from 'react'
import {
  connect
} from 'react-redux'

import {
  userUpdateRequest,
  userResetRequest,
  userDetailsRequest
} from '../../actions/userDetailsActions'

import {
  Topbar,
  UserForm,
  FormPlaceholder
} from '../../config/components'

import {
  Field,
  reduxForm
} from 'redux-form'

import history from '../../config/history'
import styles from './styles.css'

class UserDetails extends React.Component {

  componentDidMount() {
    const { params } = this.props.match
    this.props.userDetailsRequest(params)
  }

  componentWillUnmount() {
    this.props.userResetRequest()
  }

  handleSubmit(values) {
    const { id } = this.props.match.params

    this.props.userUpdateRequest({
      id,
      name: values.name,
      cellphone: values.cellphone
    })
  }

  handleBack() {
    history.push(`/admin/users/customers`)
  }

  render () {
    return(
      <div className="user-details-container">
        <Topbar title="Editar usuário" icon="user">
          <button className="btn btn-sm btn-default" onClick={this.handleBack.bind(this)}>
            Voltar
          </button>
        </Topbar>
        <div className="user-details-content">
          {!this.props.userDetails.data && (
            <FormPlaceholder />
          )}
          {this.props.userDetails.data && (
            <UserForm
              onSubmit={this.handleSubmit.bind(this)}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ userDetails }) => {
	return {
    userDetails
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
    userUpdateRequest: (data) => {
      dispatch(userUpdateRequest(data))
    },
    userDetailsRequest: (data) => {
      dispatch(userDetailsRequest(data))
    },
    userResetRequest: () => {
      dispatch(userResetRequest())
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)

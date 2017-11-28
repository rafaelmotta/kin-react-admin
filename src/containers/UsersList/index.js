import React from 'react'
import {
  connect
} from 'react-redux'

import {
  usersRequest,
  usersResetRequest,
  userDeleteRequest
} from '../../actions/usersActions'

import {
  Table,
  Topbar,
  SlatSearch,
  EditButton,
  RemoveButton,
  ListPlaceholder
} from '../../config/components'

import {
  Button
} from 'react-bootstrap'

import history from '../../config/history'
import styles from './styles.css'

class Users extends React.Component {

  componentDidMount() {
    this.props.usersRequest({ role: 'customer' })
  }

  componentWillUnmount() {
    this.props.usersResetRequest()
  }

  /**
   * @name handleOnEdit
   * @description callback when user press on edit button
   * @param {Object} user
   * @return {Void}
  **/
  handleOnEdit(user) {
    history.push(`/admin/users/customers/${user.id}`)
  }

  /**
   * @name handleOnRemove
   * @description callback when user press on remove button
   * @param {Object} user
   * @return {Void}
  **/
  handleOnRemove(user) {
    this.props.userDeleteRequest(user)
  }

  /**
   * @name handleSearchSubmit
   * @description callback when submits search form
   * @param {String} user - user name
   * @return {Void}
  **/
  handleSearchSubmit(name) {
    const { meta } = this.props.users
    this.props.usersRequest({ name, page: meta.current_page, role: 'customer' })
  }

  /**
   * @name handleSelectPage
   * @description callback when changes pagination
   * @param {Integer} page - new page
   * @return {Void}
  **/
  handleSelectPage(page) {
    this.props.usersRequest({ page, role: 'customer' })
  }

  render() {
    const { users } = this.props

    return (
      <div className="users-container">
        <Topbar title="Clientes" icon="users" />
        <SlatSearch
          label="Buscar"
          placeholder="Digite o nome do usuário"
          onSubmit={this.handleSearchSubmit.bind(this)}
        />
        {users && users.data && users.data.length > 0 && (
          <Table meta={users.meta} onSelectPage={this.handleSelectPage.bind(this)}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Celular</th>
                <th>Viagens</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((u) => {
                return(
                  <tr key={u.id} className={u.blocked ? "danger" : null}>
                    <td>{u.name}</td>
                    <td>{u.cellphone}</td>
                    <td>{u.travels_count}</td>
                    <td>
                      <EditButton onClick={this.handleOnEdit.bind(this, u)}/>
                      <RemoveButton
                        confirmationDescription={u.blocked ? 'Deseja ativar este usuário?' :  'Deseja desativar este usuário?'}
                        onSubmit={this.handleOnRemove.bind(this, u)}
                        isRemoved={u.blocked}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
        {!users.data && (
          <ListPlaceholder />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
	return {
    users
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
    usersRequest: (data) => {
      dispatch(usersRequest(data))
    },
    usersResetRequest: () => {
      dispatch(usersResetRequest())
    },
    userDeleteRequest: (data) => {
      dispatch(userDeleteRequest(data))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

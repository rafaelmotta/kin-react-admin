import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'

import MainNavLinkItem from '../MainNavLinkItem'

import {
  logoutRequest
} from '../../actions/logoutActions'

import styles from './styles.css'

class Sidebar extends React.Component {

  static propTypes = {
    logoutRequest: PropTypes.func.isRequired
  }

  handleClickOnLogoutButton() {
    this.props.logoutRequest()
  }

  render() {
    return(
      <div className="main-navbar-container">
        <nav className="main-navbar-top">
          <MainNavLinkItem icon="dashboard" path="/admin/dashboard/main" />
          <MainNavLinkItem icon="users" path="/admin/users/list" />
        </nav>
        <nav className="main-navbar-bottom">
          <MainNavLinkItem icon="cog" path="/admin/profile/settings" />
          <MainNavLinkItem icon="power-off" onClick={this.handleClickOnLogoutButton.bind(this)} />
        </nav>
      </div>
    )
  }
}

const mapStateToProps = () => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
    logoutRequest: () => {
      dispatch(logoutRequest())
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Sidebar)

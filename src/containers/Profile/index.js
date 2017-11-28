import React from 'react'
import {
  connect
} from 'react-redux'

import {
  meUpdateRequest
} from '../../actions/meActions'

import {
  ProfileForm
} from '../../config/components'

class Profile extends React.Component {

  handleSubmit(data) {
    this.props.meUpdateRequest(data)
  }

  render() {
    return (
      <div className="profile-container">
        <ProfileForm
          onSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ me }) => {
	return {
    me
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
    meUpdateRequest: (data) => {
      dispatch(meUpdateRequest(data))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

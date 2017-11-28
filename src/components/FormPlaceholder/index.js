import React from 'react'

import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'

class FormPlaceholder extends React.Component {

  render() {
    return(
      <div className="form-placeholder-container">
        <ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 35 }} />
        <ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 35 }} />
        <ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 35 }} />
        <ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 35 }} />
      </div>
    )
  }
}

export default FormPlaceholder

import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import "react-placeholder/lib/reactPlaceholder.css"

class ListPlaceholder extends React.Component {

  loading() {
    let placeholders = []

    placeholders.push(<ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 20 }} />)

    for (var i = 0; i < 15; i++) {
      placeholders.push(<ReactPlaceholder showLoadingAnimation type="textRow" style={{ height: 35 }} />)
    }

    return placeholders
  }

  render() {
    return(
      <div className="list-placeholder-container">
        {this.loading()}
      </div>
    )
  }
}

export default ListPlaceholder

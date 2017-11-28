import React from 'react'
import PropTypes from 'prop-types'

import {
  Pagination
} from 'react-bootstrap'

import styles from './styles.css'

class Table extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.node.isRequired,
    ]),
    meta: PropTypes.object,
    onSelectPage: PropTypes.func,
  }

  render() {
    return(
      <div className="table-responsive kin-table-container">
        <table className="table table-hover table-striped">
          {this.props.children}
        </table>
        {
          this.props.meta && this.props.meta.total_pages > 1 && (
            <div className="pagination-container">
              <Pagination
                bsSize="small"
                items={this.props.meta.total_pages}
                activePage={this.props.meta.current_page}
                onSelect={this.props.onSelectPage}
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default Table

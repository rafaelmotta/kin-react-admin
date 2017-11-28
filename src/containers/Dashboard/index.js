import React from 'react'
import {
  connect
} from 'react-redux'

import {
  Topbar,
  DashboardItem,
  DashboardInfo,
  DashboardHeader,
  NoResults,
} from '../../config/components'

import {
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

import {
  dashboardRequest
} from '../../actions/dashboardActions'

import styles from './styles.css'

class Dashboard extends React.Component {

  state = {
    period: 'today'
  }

  periods = [
    { period: 'today', label: 'Hoje'},
    { period: 'yesterday', label: 'Ontem'},
    { period: 'last_7_days', label: 'Últimos 7 dias'},
    { period: 'last_30_days', label: 'Últimos 30 dias '},
  ]

  componentDidMount() {
    this.props.dashboardRequest({ period: this.state.period })
  }

  handleOnChangePeriod(period) {
    this.setState({ period })
    this.props.dashboardRequest({ period })
  }

  get periodLabel() {
    switch(this.state.period) {
      case 'today':
        return 'de hoje'
        break;
      case 'yesterday':
        return 'de ontem'
        break;
      case 'last_7_days':
        return 'dos últimos 7 dias'
        break;
      case 'last_30_days':
        return 'dos últimos 30 dias'
        break;
    }
  }

  render() {
    const { dashboard } = this.props

    return (
      <div className="dashboard-container">
        <Topbar title="Dashboard" icon="dashboard">
          <DropdownButton id="period" onSelect={this.handleOnChangePeriod.bind(this)} bsSize="sm" bsStyle="default" title="Personalizar" pullRight>
            {this.periods.map((p) =>
              <MenuItem
                eventKey={p.period}
                key={p.period}
                active={this.state.period === p.period}>
                  {p.label}
              </MenuItem>
            )}
          </DropdownButton>
        </Topbar>
        <div className="page-content">
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ dashboard }) => {
	return {
    dashboard
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
    dashboardRequest: (data) => {
      dispatch(dashboardRequest(data))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

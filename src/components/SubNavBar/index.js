import React from 'react'

import SubNavBarLinkItem from '../SubNavBarLinkItem'
import SubNavBarBrand from '../SubNavBarBrand'
import {
  withRouter
} from 'react-router'

import {
  BRAND_NAME
} from '../../config/constants/brand'

import styles from './styles.css'

class Nav extends React.Component {

  get basePath() {
    return this.props.location.pathname.split('/')[2]
  }

  render() {
    return(
      <div className="subnavbar-container">
        <SubNavBarBrand
          name={BRAND_NAME}
        />
        {
          this.basePath === 'dashboard' && (
            <div>
              <SubNavBarLinkItem
                path="/admin/dashboard/main"
                icon="cogs"
                title="Dashboard"
                description="Analise os principais dados"
              />
              <SubNavBarLinkItem
                path="/admin/dashboard/map"
                icon="map-o"
                title="Mapa"
                description="Posição dos motoristas"
              />
            </div>
          )
        }
        {
          this.basePath === 'users' && (
            <div>
              <SubNavBarLinkItem
                path="/admin/users/customers"
                icon="users"
                title="Clientes"
                description="Conheça mais sobre eles"
              />
            </div>
          )
        }
        {
          this.basePath === 'profile' && (
            <div>
              <SubNavBarLinkItem
                path="/admin/profile/settings"
                icon="cog"
                title="Minha conta"
                description="Analise os principais dados"
              />
            </div>
          )
        }
      </div>
    )
  }
}

const NavWithRouter = withRouter(Nav)
export default NavWithRouter

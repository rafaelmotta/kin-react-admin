import SignIn from '../containers/SignIn'
import RecoverPassword from '../containers/RecoverPassword'

import Dashboard from '../containers/Dashboard'
import UsersList from '../containers/UsersList'
import UserEdit from '../containers/UserEdit'
import Profile from '../containers/Profile'

const publicRoutes = [
  { path: '/sign-in', component: SignIn },
  { path: '/recover-password', component: RecoverPassword },
]

const privateRoutes = [
  { path: '/admin/dashboard/main', component: Dashboard },
  { path: '/admin/users/list', component: UsersList, exact: true },
  { path: '/admin/users/:id', component: UserEdit, exact: true },
  { path: '/admin/profile/settings', component: Profile, title: 'Minha conta', icon: 'user' },
]

export {
  publicRoutes,
  privateRoutes
}

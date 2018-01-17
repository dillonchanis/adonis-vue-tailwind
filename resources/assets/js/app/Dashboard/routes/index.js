import { Dashboard } from '../components'

export default [
  {
    path: '/',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]

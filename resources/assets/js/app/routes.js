import Base from '@/Base'
import PageNotFound from '@/PageNotFound'
import auth from './Auth/routes'
import dashboard from './Dashboard/routes'

export default [
  ...auth,
  {
    path: '/',
    component: Base,
    meta: {
      guest: false,
      needsAuth: true
    },
    children: [
      ...dashboard
    ]
  },
  {
    path: '*',
    component: PageNotFound
  }
]

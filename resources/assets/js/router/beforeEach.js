import store from '../store'

const user = store.getters['auth/user']

const beforeEach = (to, from, next) => {
  if (to.matched.some(route => route.meta.needsAuth)) {
    if (!user.authenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
}

export default beforeEach

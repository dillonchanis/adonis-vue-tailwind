import localforage from 'localforage'

export const setAuthenticated = (state, isAuth) => {
  state.user.authenticated = isAuth
}

export const setUserData = (state, data) => {
  state.user.data = data
}

export const setToken = (state, token) => {
  if (!token) {
    localforage.removeItem('authtoken')
    return
  }

  localforage.setItem('authtoken', token)
}

export const clearIntended = () => {
  localforage.removeItem('intended')
}

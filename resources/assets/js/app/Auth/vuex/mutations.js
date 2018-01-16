import localforage from 'localforage'

export const setAuthenticated = (state, isAuth) => {
  state.user.authenticated = isAuth
}

export const setUserData = (state, data) => {
  state.user.data = data
}

export const clearIntended = () => {
  localforage.removeItem('intended')
}

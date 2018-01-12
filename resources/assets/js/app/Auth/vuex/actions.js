import { isEmpty } from 'lodash'
import { setHttpToken } from '../../../helpers'
import localforage from 'localforage'

export const register = ({ dispatch }, { payload, context }) => {
  return axios.post('/api/register', payload).then((response) => {
    dispatch('setToken', response.data.meta.token).then(() => {
      dispatch('fetchUser')
    })
  }).catch((error) => {
    context.errors = error.response.data.errors
  })
}

export const login = ({ dispatch }, { payload, context }) => {
  return axios.post('/api/login', payload).then((response) => {
    dispatch('setToken', response.data.meta.token).then(() => {
      dispatch('fetchUser')
    })
  }).catch((error) => {
    context.errors = error.response.data.errors
  })
}

export const logout = ({ dispatch }) => {
  return axios.post('/api/logout').then((response) => {
    dispatch('clearAuth')
  })
}

export const fetchUser = ({ commit }, id) => {
  return axios.get(`/api/user/${id}`).then((response) => {
    commit('setAuthenticated', true)
    commit('setUserData', response.data.data)
  })
}

export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists').then((token) => {
      setHttpToken(token)
    })
  }
}

export const checkTokenExists = ({ commit, dispatch }) => {
  return localforage.getItem('authtoken').then((token) => {
    if (isEmpty(token)) {
      return Promise.reject('NO_STORAGE_TOKEN')
    }

    return Promise.resolve(token)
  })
}

export const clearAuth = ({ commit }) => {
  commit('setAuthenticated', false)
  commit('setUserData', null)
  commit('setToken', null)
  commit('clearIntended')
  setHttpToken(null)
}

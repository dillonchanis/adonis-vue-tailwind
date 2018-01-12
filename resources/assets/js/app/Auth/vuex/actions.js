import { isEmpty } from 'lodash'
import { setHttpToken } from '../../../helpers'
import localforage from 'localforage'

const baseUrl = '/api/v1'

export const register = ({ dispatch }, { payload, context }) => {
  return axios.post(`${baseUrl}/register`, payload).then((response) => {
    dispatch('setToken', response.data.token).then(() => {
      dispatch('fetchUser', response.data.user.id)
    })
  }).catch((error) => {
    console.log(error)
  })
}

export const login = ({ dispatch }, { payload, context }) => {
  return axios.post(`${baseUrl}/login`, payload).then((response) => {
    dispatch('setToken', response.data.token).then(() => {
      dispatch('fetchUser', response.data.user.id)
    })
  }).catch((error) => {
    console.log(error)
  })
}

export const logout = ({ dispatch }) => {
  return axios.post(`${baseUrl}/logout`).then((response) => {
    dispatch('clearAuth')
  })
}

export const fetchUser = ({ commit }, id) => {
  return axios.get(`${baseUrl}/user/${id}`).then((response) => {
    commit('setAuthenticated', true)
    commit('setUserData', response.data)
  })
}

export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists').then((token) => {
      setHttpToken(token)
    })
  }

  commit('setToken', token)
  setHttpToken(token)
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

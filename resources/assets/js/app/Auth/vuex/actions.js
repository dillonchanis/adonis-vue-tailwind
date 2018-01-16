const baseUrl = '/api/v1'

export const register = async ({ commit }, { payload, context }) => {
  try {
    const user = await axios.post(`${baseUrl}/register`, payload)
    commit('setAuthenticated', true)
    commit('setUserData', user)
  } catch (error) {
    context.errors = error.response.data[0]
  }
}

export const login = async ({ commit }, { payload, context }) => {
  try {
    const user = await axios.post(`${baseUrl}/login`, payload)
    commit('setAuthenticated', true)
    commit('setUserData', user)
  } catch (error) {
    context.errors = error.response.data[0]
  }
}
export const logout = async ({ dispatch }) => {
  await axios.post(`${baseUrl}/logout`)
  dispatch('clearAuth')
}

export const fetchUser = async ({ commit }, id) => {
  const user = await axios.get(`${baseUrl}/user/${id}`)
  commit('setAuthenticated', true)
  commit('setUserData', user)
}

export const clearAuth = ({ commit }) => {
  commit('setAuthenticated', false)
  commit('setUserData', null)
  commit('clearIntended')
}

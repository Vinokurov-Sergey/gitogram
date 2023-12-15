import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    checkUser () {
      console.log('modules auth checkUser')
      api.auth.getCode()
    },
    async exchangeForToken (store, code) {
      console.log('modules auth exchangeForToken')
      const { data } = await api.auth.getToken(code)
      return data.token
    },
    async getUser ({ commit }) {
      try {
        console.log('modules auth getUser')
        const { data } = await api.auth.getUserData()
        commit('SET_USER', data)
        return data
      } catch (error) {
        if (error.response.status === 401) {
          console.log('Необходимо авторизоваться')
        }
      }
    }
  }
}

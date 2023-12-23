import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      if (payload.starred === null) {
        state.data = payload.data.map(item => {
          item.following = { status: false, loading: false, theme: 'green' }
          return item
        })
      } else {
        state.data = payload.data.map(tr => {
          const starredTrending = payload.starred.find(st => {
            return st.id === tr.id
          })
          if (starredTrending) {
            tr.following = { status: true, loading: false, theme: 'grey' }
          } else {
            tr.following = { status: false, loading: false, theme: 'green' }
          }
          return tr
        })
      }
    },
    SET_README (state, payload) {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.readme = payload.content
        }
        return item
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.following = { ...item.following, ...payload.following }
        }
        return item
      })
    }
  },
  actions: {
    async getData ({ commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', {
          starred: rootState.starred.starred,
          data: data.items
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
      }
    },
    async starRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, following: { status: false, loading: true, theme: 'grey' } })
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: { status: true, loading: false, theme: 'grey' } })
      } catch (e) {
        console.log(e)
      }
    },

    async unStarRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, following: { status: true, loading: true, theme: 'green' } })
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: { status: false, loading: false, theme: 'green' } })
      } catch (e) {
        console.log(e)
      }
    }

  }
}

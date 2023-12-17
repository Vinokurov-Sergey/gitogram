import { createStore } from 'vuex'
import auth from './modules/auth'
import trendings from './modules/trendings'
import starred from './modules/starred'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => {
        return !state.starred.starred.some(starredRepo => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    auth,
    trendings,
    starred
  }

})

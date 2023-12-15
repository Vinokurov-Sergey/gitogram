import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'
import $store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach start')
  const token = localStorage.getItem('token')
  console.log('beforeEach token = ', token)
  if (token === null && to.name !== 'auth') {
    console.log('beforeEach token null and auth next auth')
    next({ name: 'auth' })
    return
  }
  if (token !== null) {
    console.log('beforeEach token not null')
    const response = await api.auth.getUserData()
    if (response.status === 200) {
      if (to.name === 'auth') {
        await $store.dispatch('auth/getUser')
        next({ name: 'feeds' })
        return
      }
    } else {
      console.log('beforeEach remove token next auth')
      localStorage.removeItem('token')
      next({ name: 'auth' })
      window.location.reload()
    }
  }

  next()
})

export default router

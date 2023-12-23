import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { user } from '../pages/user'
import { repos } from '../pages/repos'
import { following } from '../pages/following'

export default [
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    children: [
      {
        path: '',
        name: 'repos',
        component: repos
      },
      {
        path: 'following',
        name: 'following',
        component: following
      }
    ]
  }
]

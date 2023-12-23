import { makeRequest } from '../requests'
import env from '../../../env'

export const getCode = () => {
  const githubApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', env.clientId)
  // params.append('scope', 'repo:status read:user')
  // params.append('scope', 'repo,user')

  window.location.href = `${githubApi}?${params}`
}

export const getToken = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId: env.clientId,
      clientSecret: env.clientSecret,
      code
    }
  })
}

export const getUserData = () => makeRequest({
  url: '/user'
})

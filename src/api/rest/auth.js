import { makeRequest } from '../requests'
import env from '../../../env'
// const clientId = '5b9784dcf299acb5dfac'
// const clientSecret = '5d5fda2b9282742d249f180c9f537f427afdaa0d'

export const getCode = () => {
  console.log('getCode')
  // debugger
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

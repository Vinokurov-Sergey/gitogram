import { makeRequest } from '../requests'

const clientId = ''
const clientSecret = ''

export const getCode = () => {
  console.log('getCode')
  // debugger
  const githubApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_Id', clientId)
  // params.append('scope', 'repo:status read:user')

  window.location.href = `${githubApi}?${params}`
}

export const getToken = (code) => {
  console.log('getToken')
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId: clientId,
      clientSecret: clientSecret,
      code
    }
  })
}

export const getUserData = () => makeRequest({
  url: '/user'
})

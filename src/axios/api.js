import axios from 'axios'
import { AuthenticationContext } from 'vue-adal'

const http = axios.create()

http.interceptors.request.use(
  config => {
    let idToken = ''
    AuthenticationContext.acquireToken('***', (err, token) => {
      console.log(err)
      idToken = token
    })
    if (idToken) {
      config.headers['Authorization'] = `Bearer ${idToken}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default http

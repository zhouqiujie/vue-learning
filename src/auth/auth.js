import { AuthenticationContext } from 'vue-adal'

const profile = AuthenticationContext.user.profile

const isAuthenticated = AuthenticationContext.isAuthenticated()

export { profile, isAuthenticated }

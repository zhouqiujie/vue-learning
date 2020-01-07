import { USER_LOGIN, USER_LOGOUT } from './mutationTypes'

export default {
  [USER_LOGIN](state, payload) {
    state.userInfo = payload.userInfo
  },
  [USER_LOGOUT](state) {
    state.userInfo = null
  }
}

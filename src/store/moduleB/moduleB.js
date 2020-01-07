import { getInfo } from '../../axios/home.api'
const moduleB = {
  state: {
    list: []
  },
  mutations: {
    listFetched(state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    listFetching({ commit }, payload) {
      getInfo(payload.user).then(
        res => {
          commit({
            type: 'listFetched',
            list: res
          })
        },
        () => {
          commit({
            type: 'listFetched',
            list: []
          })
        }
      )
    }
  }
}

export default moduleB

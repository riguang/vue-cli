const state = {
  count: 1
}
const mutations = {
  INCREASE(state, payload) {
    state.count += payload.num
  }
}
const actions = {
  increaseAsync({ commit }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('num', payload)
        commit('INCREASE', payload)
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  test: state => state.count
}

export default {
  state,
  mutations,
  actions,
  getters
}
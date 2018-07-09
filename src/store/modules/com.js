const state = {
  menu: ['登录','应用大全']
}
const mutations = {
  ADD_MENU(state, payload) {
    state.menu.push(payload.menu)
  }
}
const actions = {
  ADD_MENU({ commit }, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('ADD_MENU', payload)
        resolve()
      }, 5000)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
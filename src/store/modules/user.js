const state = {
  access_token: ''
}
const mutations = {
  SET_ACCESS_TOKEN(state, access_token) {
    state.access_token = access_token
  }
}
const actions = {
}
const getters = {
  access_token: state => state.access_token
}
export default {
  state,
  mutations,
  actions,
  getters
}
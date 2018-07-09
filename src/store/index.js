import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import user from './modules/user'
import com from './modules/com'
// import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    test,
    user,
    com
  }
})
export default store

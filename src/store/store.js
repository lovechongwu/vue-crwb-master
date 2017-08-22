/**
 * Created by android on 2017/8/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  adminInfo: {}
}
const mutations = {
  saveAdminInfo (state, adminInfo) {
    state.adminInfo = adminInfo
  }
}

export default new Vuex.Store({
  state,
  mutations
})


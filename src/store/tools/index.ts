import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
import state from "./state"

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}
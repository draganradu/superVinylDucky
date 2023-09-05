import { createStore } from 'vuex'
import cv from './cv'
import shop from './shop'
import tools from './tools'
import user from './user'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    doneTodos(state: any) {
      return state.count + 5;
    }
  },
  mutations: {
    increment(state: any) {
      state.count++
    }
  },
  modules: {
    cv,
    shop,
    tools,
    user,
  }
})

export default store

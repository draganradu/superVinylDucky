import { createStore } from 'vuex'

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
  }
})

export default store

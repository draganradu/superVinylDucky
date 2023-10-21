import { createStore, type StoreOptions } from 'vuex'
import cv from './cv'
import shop from './shop'
import tools from './tools'
import user from './user'
import { type RootState } from './storeType'


// Create a new store instance.
const store: StoreOptions<RootState> = {
  modules: {
    cv,
    shop,
    tools,
    user,
  }
}

export default createStore(store)

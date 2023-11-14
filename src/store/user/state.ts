import type { userStoreType } from "./type"

const initStore: userStoreType = {
  isDebug: (() => { return window.location.hostname === import.meta.env.VITE_DEBUG })(),
  isLoggedIn: false,
  user: (() => {
    const loc = localStorage.getItem("userAPI")

    if (loc) {
      return JSON.parse(loc)
    }
    return null
  })(),
}

export default initStore
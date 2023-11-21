import type { alerts, userStoreType } from "./type"

export const SET_login = (state: userStoreType, payload: boolean) => {
  state.isLoggedIn = payload
}


export const SetUser = (state: userStoreType, payload: any) => {
  state.user = payload
  localStorage.setItem("userAPI", JSON.stringify(payload))
}

export const SetAlert = (state: userStoreType, payload: alerts) => {
  const lastPosition = state.alerts.length
  state.alerts = [ ... state.alerts, payload ]
  if(payload.autoRemove) {
    setTimeout(() => {
      state.alerts[lastPosition].hiden = true 
    }, 3000)
  }
}

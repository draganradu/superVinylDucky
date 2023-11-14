import type { userStoreType } from "./type"

const SET_login = (state: userStoreType, payload: boolean) => {
    state.isLoggedIn = payload
}


const SetUser = (state: userStoreType, payload: any) => {
    state.user = payload
    localStorage.setItem("userAPI", JSON.stringify(payload))
}


export { SET_login, SetUser }
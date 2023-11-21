import type { userStoreType } from "./type"

export const isLoggedIn = (state: userStoreType) => {
    return state.isLoggedIn
}

export const getAlerts = (state: userStoreType)  => {
    return state.alerts
}
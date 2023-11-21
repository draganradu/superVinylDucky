export enum alertType {
    success = "success",
    warning = "warning",
    info = "info",
    light = "light"
}
export interface alerts {
    "text": string,
    "type": alertType,
    "autoRemove": boolean
    "hiden": boolean
}
export interface userStoreType {
    isDebug: boolean,
    isLoggedIn: boolean,
    user: null,
    alerts: alerts[]
}

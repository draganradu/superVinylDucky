export default {
  isLoggedIn: false,
  isDebug: (() => { return window.location.hostname === import.meta.env.VITE_DEBUG })(),
}
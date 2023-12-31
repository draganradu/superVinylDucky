import i18n from "@/i18n"
import { nextTick } from "vue" // <--- 1
import en from "./locales/en.json"
import nl from "./locales/nl.json"
const messages = { en, nl }

const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
  },

  set currentLocale(newLocale: any) { // <--- 2
    //@ts-ignore
    i18n.global.locale.value = newLocale
  },

  isLocaleSupported(locale: any) { // <--- 1
    return Trans.supportedLocales.includes(locale)
  },


  async loadLocaleMessages(locale: any) {
    //@ts-ignore
    if (!i18n.global.availableLocales.includes(locale)) {  // <--- 3
      //@ts-ignore
      i18n.global.setLocaleMessage(locale, messages.en)  // <--- 5
    }

    return nextTick()  // <--- 6
  },

  async switchLanguage(newLocale: any) { // <--- 3
    Trans.currentLocale = newLocale
    //@ts-ignore
    document.querySelector("html").setAttribute("lang", newLocale)
  },

  // async switchLanguage(newLocale) {
  //   await Trans.loadLocaleMessages(newLocale)  // <--- 2
  //   Trans.currentLocale = newLocale
  //   document.querySelector("html").setAttribute("lang", newLocale)
  //   localStorage.setItem("user-locale", newLocale)
  // },

  async routeMiddleware(to: any, _from: any, next: any): Promise<any> {
    const paramLocale = to.params.locale
    if (!Trans.isLocaleSupported(paramLocale)) {
      return next('/error404/')
    }
    await Trans.switchLanguage(paramLocale)
    return next()
  },
}

export default Trans
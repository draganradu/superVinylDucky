import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import nl from "./locales/nl.json"


export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: false,
    messages: { en, nl }
})
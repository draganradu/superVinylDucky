import { createI18n } from "vue-i18n";
import messages from "./locales/index";

console.log("env", messages)

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    legacy: false, // <--- 3
    globalInjection: true,
    messages
})
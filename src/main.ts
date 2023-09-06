import './assets/main.css'
import i18n from './i18n'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const head = createHead()

app.use(store)
app.use(head)
app.use(router)
app.use(i18n)

app.mount('#app')

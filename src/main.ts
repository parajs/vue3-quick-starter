// import './styles/main.css'
import './styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './interceptors'
const app = createApp(App)
window.AppContext = app._context
app.use(createPinia())
app.use(router)

app.mount('#app')

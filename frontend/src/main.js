import { createApp } from 'vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import App from './App.vue'

loadFonts()

const app = createApp(App)
app.use(vuetify).use(router)

app.mount('#app')
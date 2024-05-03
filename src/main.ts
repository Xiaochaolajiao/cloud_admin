
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

 import { registerGlobalComponent } from './global'

const app = createApp(App)
app.use(registerGlobalComponent)


app.use(createPinia())
app.use(router)

app.mount('#app')

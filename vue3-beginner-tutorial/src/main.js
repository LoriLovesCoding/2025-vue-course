// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
// 没有添加路由之前
// createApp(App).mount('#app')

// 添加路由以后修改

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

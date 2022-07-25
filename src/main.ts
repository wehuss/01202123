import { createApp } from 'vue'
import App from './App.vue'
import Table from './components/table'

const app=createApp(App)

app.use(Table)
console.log('app',app);
app.mount('#app')

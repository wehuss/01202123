import { createApp } from 'vue'
import App from './App.vue'
import Table from './components/table'
import Form from './components/form'

const app = createApp(App)

app.use(Table)
app.use(Form)
app.mount('#app')

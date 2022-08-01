import { createApp } from 'vue'
import App from './App.vue'
import Table from './components/table'
import Form from './components/form'
// import './components/form/data-entry-components'

const app = createApp(App)

app.use(Table)
app.use(Form)
app.mount('#app')

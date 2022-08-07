import { App, Plugin } from 'vue'
import Form from './form'
import Table from './table'

const components:Record<string, Plugin> = {
  Form,
  Table,
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default {
  ...components,
  install,
}

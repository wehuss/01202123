import { App } from 'vue'
import _Form from './form'

const Form = Object.assign(_Form, {
  install(app:App) {
    app.component('ApForm', _Form)
  },
})

export default Form

export type {
  customRules,
  FormItemRender,
  FormConfig,
  FormItemConfig,
} from './interface'

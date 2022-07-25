import { App } from 'vue'
import _Table from './table'

const Table=Object.assign(_Table,{
  install(app:App){
    app.component('ApTable',_Table)
  }
})

export default Table
import { defineComponent, ref } from 'vue'
import { Form } from '@arco-design/web-vue'
import { FormInstance } from '@arco-design/web-vue/es/form'

export default defineComponent({
  name: 'Form',
  setup() {
    const a:FormInstance['$props'] = {
      model: {},
    }
    const defaultValues = ref({})
    return () => <Form model={defaultValues.value} />
  },
})

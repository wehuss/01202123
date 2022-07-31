import { defineComponent, ref } from 'vue'
import { Form } from '@arco-design/web-vue'
import { InputProps } from './interface'

export default defineComponent({
  name: 'Form',
  setup() {
    const defaultValues = ref({})
    return () => <Form model={defaultValues.value} />
  },
})

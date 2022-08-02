import {
  defineComponent, PropType, toRefs,
} from 'vue'
import { Form } from '@arco-design/web-vue'
import { omit } from '@/utils/index'
import { FormConfig } from './interface'
import FormItem from './form-item'

export default defineComponent({
  name: 'Form',
  props: {
    config: {
      type: Object as PropType<FormConfig>,
      required: true,
      default: () => ({
        model: {},
      }),
    },
  },
  setup(props) {
    const { config } = toRefs(props)

    return () => (
      <Form {...omit(config.value, 'fields')}>
        {
          config.value.fields.map((field) => <FormItem config={field} />)
        }
      </Form>
    )
  },
})

import {
  defineComponent, PropType, provide, ref, toRefs,
} from 'vue'
import { Form } from '@arco-design/web-vue'
import { omit } from '@/utils/index'
import {
  BaseModel, FormConfig, FormItemConfig, FORM_INJECT_KEY,
} from './interface'
import FormItem from './form-item'

function createModel(
  oldModel: BaseModel,
  fields: FormItemConfig[],
) {
  // const _model:{
  //   [key:string]:any
  // } = {}
  return fields.reduce(
    (model, { field, defaultValue }) => {
      model[field] = oldModel[field] ?? defaultValue ?? null
      return model
    },
    {} as BaseModel,
  )
}

export default defineComponent({
  name: 'Form',
  props: {
    config: {
      type: Object as PropType<FormConfig>,
      required: true,
      default: () => ({
      }),
    },
  },
  setup(props) {
    const { config } = toRefs(props)
    const model = ref(createModel({}, config.value.fields))
    // console.log('model', model)
    provide(FORM_INJECT_KEY, model.value)

    return () => (
      <Form {...omit(config.value, 'fields')} model={model}>
        {config.value.fields.map((field) => (
          <FormItem config={field} />
        ))}
      </Form>
    )
  },
})

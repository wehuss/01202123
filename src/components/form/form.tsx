import {
  computed,
  defineComponent, PropType, provide, ref, toRefs, watch,
} from 'vue'
import { Form } from '@arco-design/web-vue'
import { omit } from '@/utils/index'
import { FormInstance } from '@arco-design/web-vue/es/form'
import { cloneDeep } from 'lodash'
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
      // console.log('model[field]', model[field], model, oldModel)
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
    },
  },
  setup(props, {
    expose,
  }) {
    const formRef = ref<FormInstance>()

    const { config } = toRefs(props)
    const model = ref(createModel({}, config.value.fields))

    watch(() => config, () => {
      model.value = createModel({}, config.value.fields)
    }, {
      deep: true,
    })

    const computedConfig = computed(() => {
      const _config = cloneDeep(config.value)
      _config.fields = _config.fields.filter((field) => {
        if (typeof field.hidden === 'function') return !field.hidden(model.value)
        return !field.hidden
      })

      return _config
    })
    // console.log('model', model)
    provide(FORM_INJECT_KEY, model)

    expose({
      formRef,
      model,
    })

    return {
      renderFunc: () => (
        <Form {...omit(computedConfig.value, 'fields')} model={model.value} ref={formRef}>
          {computedConfig.value.fields.map((field) => (
            <FormItem config={field} />
          ))}
        </Form>
      ),
      formRef,
      model,
    }
  },
  render() {
    return this.renderFunc()
  },
  // methods:{
  //   getFormRef(){
  //     return this.
  //   }
  // }
  // mounted() {
  //   console.log('this', this)
  // },
})

import { omit } from '@/utils'
import { FormItem } from '@arco-design/web-vue'
import {
  defineComponent, inject, PropType, toRefs, createVNode, computed,
} from 'vue'
import {
  dataEntryComponents,
  firstLetterToUpperCase,
} from './data-entry-components'
import {
  CustomRules, customRules, FormItemConfig, FORM_INJECT_KEY,
} from './interface'

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<FormItemConfig>,
      required: true,
    },
  },
  setup(props) {
    const { config } = toRefs(props)
    const model = inject(FORM_INJECT_KEY)
    const rules = computed(() => {
      const _rules = config.value.rules
      switch (typeof _rules) {
        case 'undefined':
          return []
        case 'string':
          return customRules[_rules as CustomRules](config.value.label)
        default:
        {
          if (Array.isArray(_rules)) {
            return _rules.map((rule) => {
              if (typeof rule === 'object') {
                return rule
              }
              return customRules[rule](config.value.label)
            })
          }
          return _rules
        }
      }
    })

    const getComponentPlaceholder = (label = '', componentName: string) => {
      let placeholder
      const _componentName = firstLetterToUpperCase(componentName)
      if (_componentName.includes('Select')) placeholder = `请选择${label}`
      if (_componentName.includes('Input')) placeholder = `请输入${label}`
      if (!label) placeholder = undefined
      return placeholder as any
    }
    const getComponent = (componentName: string) => dataEntryComponents[
        firstLetterToUpperCase(
          componentName,
        ) as keyof typeof dataEntryComponents
    ]
    const renderDataEntryComponent = ({ render, label }: FormItemConfig) => {
      switch (typeof render) {
        default:
          return (
            <dataEntryComponents.Input
              placeholder={getComponentPlaceholder(label, 'input')}
            />
          )
        case 'string': {
          const _component = getComponent(render)
          return (
            <_component placeholder={getComponentPlaceholder(label, render)} />
          )
        }
        case 'object': {
          const _component = getComponent(render.component)
          return (
            <_component
              placeholder={
                (render as any)?.placeholder
                ?? getComponentPlaceholder(label, render.component)
              }
              {
                ...omit(render, 'component')
              }
              v-slots={{
                ...(render?.['v-slots'] || {}),
              }}
            />
          )
        }
        case 'function':
          return render()
      }
    }

    return () => {
      const DataEntryComponent = renderDataEntryComponent(config.value)
      console.log('test', createVNode(DataEntryComponent, {
        modelValue: model?.value[config.value.field],
        'onUpdate:modelValue': (value: any) => {
          if (model?.value) model.value[config.value.field] = value
        },
      }))
      return createVNode(
        FormItem,
        {
          ...omit(config.value, 'render', 'rules'),
          rules: rules.value,
        },
        () => [
          createVNode(DataEntryComponent, {
            modelValue: model?.value[config.value.field],
            'onUpdate:modelValue': (value: any) => {
              if (model?.value) model.value[config.value.field] = value
            },
          }),
        ],
      )
    }
  },
})

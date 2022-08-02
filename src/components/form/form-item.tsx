import { omit } from '@/utils'
import { FormItem } from '@arco-design/web-vue'
import { defineComponent, PropType, toRefs } from 'vue'
import {
  dataEntryComponents,
  firstLetterToUpperCase,
} from './data-entry-components'
import { FormItemConfig } from './interface'

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<FormItemConfig>,
      required: true,
    },
  },
  setup(props) {
    const { config } = toRefs(props)

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
          return <dataEntryComponents.Input placeholder={getComponentPlaceholder(label, 'input')} />
        case 'string': {
          const _component = getComponent(render)
          return (
            <_component
              placeholder={getComponentPlaceholder(label, render)}
            />
          )
        }
        case 'object': {
          const _component = getComponent(render.component)
          return (
            <_component
              placeholder={
                getComponentPlaceholder(label, render.component)
              }
            />
          )
        }
        case 'function':
          return render()
      }
    }

    return () => {
      const DataEntryComponent = () => renderDataEntryComponent(config.value)
      return (
        <FormItem {...omit(config.value, 'render')}>
          <DataEntryComponent />
        </FormItem>
      )
    }
  },
})

import {
  defineComponent, PropType, ref, toRefs,
} from 'vue'
import { Form, FormItem, Input } from '@arco-design/web-vue'
import { cloneDeep } from 'lodash'
import { FormConfig } from './interface'

const omit = (obj:any, key:string) => {
  const _obj = cloneDeep(obj)
  delete _obj[key]
  return _obj
}

export default defineComponent({
  name: 'Form',
  props: {
    formConfig: {
      type: Object as PropType<FormConfig>,
      default: () => ({}),
    },
  },
  setup(props) {
    const { formConfig } = toRefs(props)
    // const renderDataEntryComponent=(renderConfig:FormItemRender)=>{
    //   switch(typeof renderConfig){
    //     case 'function'
    //   }
    // }
    return () => <Form {
      ...omit(formConfig.value, 'fields')
    } >
      <FormItem label='test'>
        <Input />
      </FormItem>
    </Form>
  },
})

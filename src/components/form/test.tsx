import { Select } from '@arco-design/web-vue'
import { defineComponent, ref } from 'vue'
import Form from './form'
import { FormConfig } from './interface'

export default defineComponent({
  setup() {
    const config = ref<FormConfig>({
      fields: [
        {
          field: 'test',
          label: '测试字段',
          // rules: ['required', 'email'],
          defaultValue: '2',
          render() {
            return <Select options={[
              {
                label: '选项1',
                value: '1',
              },
              {
                label: '选项2',
                value: '2',
              },
            ]} />
          },
        },
      ],
    })
    return () => (
      <Form config={config.value} />
    )
  },
})

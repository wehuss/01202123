import { Select } from '@arco-design/web-vue'
import { defineComponent, onMounted, ref } from 'vue'
import Form from './form'
import { FormConfig } from './interface'

export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof Form>>()
    const config = ref<FormConfig>({
      fields: [
        {
          field: 'test',
          label: '测试字段',
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
        {
          field: 'email',
          label: 'email',
          rules: ['required', 'email'],
          validateTrigger: ['input'],
          render: 'inputPassword',
          hidden: (model) => model.test === '2',
        },
      ],
    })

    onMounted(() => {
      console.log('formRef', formRef.value?.formRef)
      config.value.fields.push({
        field: 'phone',
        label: 'phone',
        rules: 'phone',
        render: {
          component: 'input',
          onInput(val) {
            console.log('model', formRef.value?.model, val)
          },
        },
      })
    })
    return () => (
      <div>
        <Form config={config.value} ref={formRef} />
      </div>
    )
  },
})

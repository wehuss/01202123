import { FormInstance, FormItemInstance } from '@arco-design/web-vue/es/form'
import { AutoCompleteInstance } from '@arco-design/web-vue/es/auto-complete'

type FormProps = FormInstance['$props'];
type FormItemProps = FormItemInstance['$props'];

type DataEntryComponents =
  | 'autoComplete'
  | 'cascader'
  | 'checkbox'
  | 'datePicker'
  | 'input'
  | 'inputNumber'
  | 'inputTag'
  | 'mention'
  | 'radio'
  | 'rate'
  | 'select'
  | 'slider'
  | 'switch'
  | 'textarea'
  | 'timePicker'
  | 'transfer'
  | 'treeSelect'
  | 'upload';

type AutoComplete=AutoCompleteInstance['$props'] & {
  type:'autoComplete'
}

export interface FromItemConfig extends FormItemProps {
  render: DataEntryComponents|AutoComplete;
}

export interface FormConfig extends FormProps {
  fields: FromItemConfig[];
}

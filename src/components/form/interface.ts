import {
  FieldRule, Form, FormItem, Input,
} from '@arco-design/web-vue'
import { ConcreteComponent, VNode, VNodeProps } from 'vue'
import {
  DataEntryComponents,
  DataEntryComponentsKey,
  FormItemProps,
  FormProps,
} from './data-entry-components'

export type Rules = 'required' | 'email' | 'url' | 'ip';
export interface FormItemConfig extends Omit<FormItemProps, 'rules'> {
  render?: DataEntryComponentsKey | DataEntryComponents | (() => VNode);
  rules?: FieldRule | FieldRule[] | Rules | Rules[];
}

export interface FormConfig extends FormProps {
  model: Record<string, any> | undefined;
  fields: FormItemConfig[];
}

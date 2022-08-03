import {
  FieldRule,
} from '@arco-design/web-vue'
import {
  InjectionKey, VNode,
} from 'vue'
import {
  DataEntryComponents,
  DataEntryComponentsKey,
  FormItemProps,
  FormProps,
} from './data-entry-components'

const ruleRegExps:{
  [key in CustomRules]?:RegExp
} = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
  url: /^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/,
  ip: /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/,
}

export const customRules:{
  [key in CustomRules]:(label:string)=>FieldRule
} = {
  required: (label:string) => ({
    required: true,
    message: `${label}不能为空`,
  }),
  email: () => ({
    message: '请输入正确的邮箱',
    match: ruleRegExps.email,
  }),
  phone: () => ({
    match: ruleRegExps.phone,
    message: '请输入正确的手机号',
  }),
  url: () => ({
    match: ruleRegExps.url,
    message: '请输入正确的url',
  }),
  ip: () => ({
    match: ruleRegExps.ip,
    message: '请输入正确的ip',
  }),
}
export type CustomRules = 'required' | 'email' | 'url' | 'ip'|'phone';

export type FormItemRender=DataEntryComponentsKey | DataEntryComponents | (() => VNode)
export interface FormItemConfig extends Omit<FormItemProps, 'rules'> {
  field:string,
  render?: FormItemRender;
  rules?: FieldRule | FieldRule[] | CustomRules | CustomRules[];
  defaultValue?:any
}

export interface FormConfig extends Omit<FormProps, 'modadl'> {
  fields: FormItemConfig[];
}

export type BaseModel={
  [key: string]: any;
}

// eslint-disable-next-line symbol-description
export const FORM_INJECT_KEY = Symbol() as InjectionKey<BaseModel>

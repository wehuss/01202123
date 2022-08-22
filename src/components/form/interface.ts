import {
  FieldRule,
} from '@arco-design/web-vue'
import {
  CSSProperties,
  InjectionKey, Ref, VNode,
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
  [key in CustomRules]:(label:string|undefined)=>FieldRule
} = {
  required: (label?:string|undefined) => ({
    required: true,
    message: label ? `${label}不能为空` : '此字段不能为空',
  }),
  email: () => ({
    message: '请输入正确的邮箱',
    type: 'email',
  }),
  phone: () => ({
    match: ruleRegExps.phone,
    message: '请输入正确的手机号',
  }),
  url: () => ({
    type: 'url',
    message: '请输入正确的url',
  }),
  ip: () => ({
    type: 'ip',
    message: '请输入正确的ip',
  }),
}
export type CustomRules = 'required' | 'email' | 'url' | 'ip'|'phone';

export type FormItemRender=DataEntryComponentsKey | DataEntryComponents &{
  style?:CSSProperties
  'v-slots'?:any
} | (() => VNode) | (() => JSX.Element)
export interface FormItemConfig extends Omit<FormItemProps, 'rules'> {
  field:string,
  render?: FormItemRender;
  rules?: FieldRule | Array<FieldRule|CustomRules> | CustomRules ;
  defaultValue?:any
  style?:CSSProperties
  'v-slots'?:any
  hidden?:boolean|((model:any)=>boolean)
}

export interface FormConfig extends Omit<FormProps, 'model'> {
  fields: FormItemConfig[];
}

export type BaseModel={
  [key: string]: any;
}

// eslint-disable-next-line symbol-description
export const FORM_INJECT_KEY = Symbol() as InjectionKey<Ref<BaseModel>>

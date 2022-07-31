import { Form, FormItem, Input } from '@arco-design/web-vue'
import { ConcreteComponent, VNodeProps } from 'vue'

type RawProps = VNodeProps & {
  // used to differ from a single VNode object as children
  // eslint-disable-next-line camelcase
  __v_isVNode?: never;
  // used to differ from Array children
  [Symbol.iterator]?: never;
} & Record<string, any>;

type DataEntryComponents =
  | 'autoComplete'
  | 'cascader'
  | 'checkbox'
  | 'checkboxGroup'
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

// 移除并数据输入组件上没有的model等属性
type RemoveRequired<T> = {
  [P in keyof T]?: T[P];
};
// ts水平过菜，无法理解发生了什么
function GET_COMPONENT_PROPS<P>(
  type: ConcreteComponent<P>
): RemoveRequired<P>;
function GET_COMPONENT_PROPS(type: any) {
  return type
}
const _inputProps = GET_COMPONENT_PROPS(Input)
export type InputProps = typeof _inputProps;

const _formProps = GET_COMPONENT_PROPS(Form)
type FormProps = typeof _formProps;

export interface FormConfig extends FormProps {
  fields: FormItemConfig[];
}

const _formItemProps = GET_COMPONENT_PROPS(FormItem)
type FormItemProps = typeof _formItemProps;
export interface FormItemConfig extends FormItemProps {
  render: DataEntryComponents;
}

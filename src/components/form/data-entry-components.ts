import {
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  QuarterPicker,
  RangePicker,
  MonthPicker,
  TimePicker,
  WeekPicker,
  YearPicker,
  InputNumber,
  Input,
  InputPassword,
  InputSearch,
  InputTag,
  Mention,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Textarea,
  Transfer,
  TreeSelect,
  Upload,
  FormItem,
  Form,
} from '@arco-design/web-vue'
import { ConcreteComponent } from 'vue'
import dayjs from 'dayjs'

export const dataEntryComponents = {
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  QuarterPicker,
  RangePicker,
  MonthPicker,
  TimePicker,
  WeekPicker,
  YearPicker,
  InputNumber,
  Input,
  InputPassword,
  InputSearch,
  InputTag,
  Mention,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Textarea,
  Transfer,
  TreeSelect,
  Upload,
}

export const firstLetterToLowerCase = (str: string) => str.replace(/^\S/, (s) => s.toLowerCase())
export const firstLetterToUpperCase = (str: string) => str.replace(/^\S/, (s) => s.toUpperCase())
// export type DataEntryComponentsKey = keyof typeof dataEntryComponents;
// export const ComponentProps = () => {
//   let components = ''
//   let componentsKey = ''
//   const componentProps = Object.keys(dataEntryComponents)
//     .map(
//       (key) => {
//         const lowerKey = firstLetterToLowerCase(key)
//         componentsKey += `|'${lowerKey}'`
//         components += `|${key}Props`
//         return `const _${key}Props=GET_COMPONENT_PROPS(${key}) \n
//         export type ${key}Props = typeof _${key}Props&{\n component:'${lowerKey}' \n}; \n`
//       },
//     )
//     .join('')
//   console.log('components', components)
//   console.log('componentProps', componentProps)
//   console.log('componentsKey', componentsKey)
// }
// ComponentProps()

export type DataEntryComponentsKey =
  | 'autoComplete'
  | 'cascader'
  | 'checkbox'
  | 'checkboxGroup'
  | 'datePicker'
  | 'quarterPicker'
  | 'rangePicker'
  | 'monthPicker'
  | 'timePicker'
  | 'weekPicker'
  | 'yearPicker'
  | 'inputNumber'
  | 'input'
  | 'inputPassword'
  | 'inputSearch'
  | 'inputTag'
  | 'mention'
  | 'radio'
  | 'radioGroup'
  | 'select'
  | 'slider'
  | 'switch'
  | 'textarea'
  | 'transfer'
  | 'treeSelect'
  | 'upload';

export type DataEntryComponents =
  | AutoCompleteProps
  | CascaderProps
  | CheckboxProps
  | CheckboxGroupProps
  | DatePickerProps
  | QuarterPickerProps
  | RangePickerProps
  | MonthPickerProps
  | TimePickerProps
  | WeekPickerProps
  | YearPickerProps
  | InputNumberProps
  | InputProps
  | InputPasswordProps
  | InputSearchProps
  | InputTagProps
  | MentionProps
  | RadioProps
  | RadioGroupProps
  | SelectProps
  | SliderProps
  | SwitchProps
  | TextareaProps
  | TransferProps
  | TreeSelectProps
  | UploadProps;

// 移除数据输入组件上必选属性
type RemoveRequired<T> = {
  -readonly [P in keyof T]?: T[P];
};
// ts水平过菜，无法理解发生了什么
function GET_COMPONENT_PROPS<P>(type: ConcreteComponent<P>): RemoveRequired<P>;
function GET_COMPONENT_PROPS(type: any) {
  return type
}

const _FormProps = GET_COMPONENT_PROPS(Form)
export type FormProps = typeof _FormProps;

const _FormItemProps = GET_COMPONENT_PROPS(FormItem)
export type FormItemProps = typeof _FormItemProps;

const _AutoCompleteProps = GET_COMPONENT_PROPS(AutoComplete)

export type AutoCompleteProps = typeof _AutoCompleteProps&{
 component:'autoComplete'
};
const _CascaderProps = GET_COMPONENT_PROPS(Cascader)

export type CascaderProps = typeof _CascaderProps&{
 component:'cascader'
};
const _CheckboxProps = GET_COMPONENT_PROPS(Checkbox)

export type CheckboxProps = typeof _CheckboxProps&{
 component:'checkbox'
};
const _CheckboxGroupProps = GET_COMPONENT_PROPS(CheckboxGroup)

export type CheckboxGroupProps = typeof _CheckboxGroupProps&{
 component:'checkboxGroup'
};
const _DatePickerProps = GET_COMPONENT_PROPS(DatePicker)

export type DatePickerProps = typeof _DatePickerProps&{
 component:'datePicker'
};
const _QuarterPickerProps = GET_COMPONENT_PROPS(QuarterPicker)

export type QuarterPickerProps = typeof _QuarterPickerProps&{
 component:'quarterPicker'
};
const _RangePickerProps = GET_COMPONENT_PROPS(RangePicker)

export type RangePickerProps = typeof _RangePickerProps&{
 component:'rangePicker'
};
const _MonthPickerProps = GET_COMPONENT_PROPS(MonthPicker)

export type MonthPickerProps = typeof _MonthPickerProps&{
 component:'monthPicker'
};
const _TimePickerProps = GET_COMPONENT_PROPS(TimePicker)

export type TimePickerProps = typeof _TimePickerProps&{
 component:'timePicker'
};
const _WeekPickerProps = GET_COMPONENT_PROPS(WeekPicker)

export type WeekPickerProps = typeof _WeekPickerProps&{
 component:'weekPicker'
};
const _YearPickerProps = GET_COMPONENT_PROPS(YearPicker)

export type YearPickerProps = typeof _YearPickerProps&{
 component:'yearPicker'
};
const _InputNumberProps = GET_COMPONENT_PROPS(InputNumber)

export type InputNumberProps = typeof _InputNumberProps&{
 component:'inputNumber'
};
const _InputProps = GET_COMPONENT_PROPS(Input)

export type InputProps = typeof _InputProps&{
 component:'input'
};
const _InputPasswordProps = GET_COMPONENT_PROPS(InputPassword)

export type InputPasswordProps = typeof _InputPasswordProps&{
 component:'inputPassword'
};
const _InputSearchProps = GET_COMPONENT_PROPS(InputSearch)

export type InputSearchProps = typeof _InputSearchProps&{
 component:'inputSearch'
};
const _InputTagProps = GET_COMPONENT_PROPS(InputTag)

export type InputTagProps = typeof _InputTagProps&{
 component:'inputTag'
};
const _MentionProps = GET_COMPONENT_PROPS(Mention)

export type MentionProps = typeof _MentionProps&{
 component:'mention'
};
const _RadioProps = GET_COMPONENT_PROPS(Radio)

export type RadioProps = typeof _RadioProps&{
 component:'radio'
};
const _RadioGroupProps = GET_COMPONENT_PROPS(RadioGroup)

export type RadioGroupProps = typeof _RadioGroupProps&{
 component:'radioGroup'
};
const _SelectProps = GET_COMPONENT_PROPS(Select)

export type SelectProps = typeof _SelectProps&{
 component:'select'
};
const _SliderProps = GET_COMPONENT_PROPS(Slider)

export type SliderProps = typeof _SliderProps&{
 component:'slider'
};
const _SwitchProps = GET_COMPONENT_PROPS(Switch)

export type SwitchProps = typeof _SwitchProps&{
 component:'switch'
};
const _TextareaProps = GET_COMPONENT_PROPS(Textarea)

export type TextareaProps = typeof _TextareaProps&{
 component:'textarea'
};
const _TransferProps = GET_COMPONENT_PROPS(Transfer)

export type TransferProps = typeof _TransferProps&{
 component:'transfer'
};
const _TreeSelectProps = GET_COMPONENT_PROPS(TreeSelect)

export type TreeSelectProps = typeof _TreeSelectProps&{
 component:'treeSelect'
};
const _UploadProps = GET_COMPONENT_PROPS(Upload)

export type UploadProps = typeof _UploadProps&{
 component:'upload'
};

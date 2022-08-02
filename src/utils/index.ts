import { cloneDeep } from 'lodash'

export function omit<T>(obj:T, key:keyof T):any

export function omit(obj: any, key: any) {
  const _obj = cloneDeep(obj)
  delete _obj[key]
  return _obj
}

import { cloneDeep } from 'lodash'

export function omit<T>(obj:T, ...keys:Array<keyof T>):any

export function omit(obj: any, ...keys: any[]) {
  const _obj = cloneDeep(obj)
  keys.forEach((key) => {
    delete _obj[key]
  })
  return _obj
}

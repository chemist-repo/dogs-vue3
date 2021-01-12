export function isObject (value: any): boolean {
  return value instanceof Object && value.constructor === Object
}

export function isArray (value: any): boolean {
  return Array.isArray(value)
}

export function isString (value: any): boolean {
  return typeof value === 'string'
}

export function isNumber (value: any): boolean {
  return typeof value === 'number'
}

export function isBoolean (value: any): boolean {
  return typeof value === 'boolean'
}

export function isUndefined (value: any): boolean {
  return typeof value === 'undefined'
}

export function isFunction (value: any): boolean {
  return typeof value === 'function'
}

export function isNull (value: any): boolean {
  return value === null
}

export function isDate (value: any): boolean {
  return value instanceof Date
}

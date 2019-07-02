/** @module ensure-object */

import {isObjectLike} from "lodash"

const isObject = value => {
  if (Array.isArray(value)) {
    return false
  }
  return isObjectLike(value)
}

/**
 * Returns `value`, or `{key: value}` if `value` is not an object
 * @param {*} value The value that will be converted to an array
 * @param {string} key The key of the object entry that might be created on a new object
 * @example
 * import ensureObject from "ensure-object"
 * ensureObject("abc", "importantKey")
 * // { importantKey: "abc" }
 * @returns {Object<string, *>} An object
 */
export default (value, key) => {
  if (value === undefined) {
    return {}
  }
  if (value |> isObject) {
    return value
  } else {
    return {
      [key]: value,
    }
  }
}
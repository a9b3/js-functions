/**
 * Given an object, this function will override the values of each top level
 * field with the corresponding env variable if it exists.
 *
 * eg.
 *
 * FOO_BAR=bar node index.js
 *
 * contents of index.js:
 *
 * const config = envOverride({ FOO_BAR: 'hi' })
 * config.FOO_BAR === 'bar'
 *
 *
 * note: keys must match env var there will be no case conversion eg. fooBar !== FOO_BAR
 *
 * @param {object} obj
 * @returns {object}
 */
export default function envOverride(obj) {
  const modifiedObj = {}

  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    modifiedObj[keys[i]] = process.env[keys[i]] || obj[keys[i]]
  }

  return modifiedObj
}

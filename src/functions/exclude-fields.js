export default function excludeFields(obj, fields = [], replaceWith) {
  return Object
    .keys(obj)
    .reduce((map, key) => {
      if (fields.indexOf(key) === -1) {
        map[key] = obj[key]
      } else if (replaceWith) {
        map[key] = replaceWith
      }
      return map
    }, {})
}

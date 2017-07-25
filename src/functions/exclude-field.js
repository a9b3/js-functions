export default function excludeField(obj, fields = []) {
  return Object
    .keys(obj)
    .filter(key => fields.indexOf(key) === -1)
    .reduce((map, key) => {
      map[key] = obj[key]
      return map
    }, {})
}

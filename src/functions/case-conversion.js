function isCapital(char) {
  return char === char.toUpperCase()
}

const convertToTokens = {
  camel: (str) => {
    const tokens = ['']
    let tokenIndex = 0

    for (let i = 0; i < str.length; i++) {
      if (isCapital(str[i])) {
        tokens.push('')
        tokenIndex++
      }

      tokens[tokenIndex] += str[i]
    }
    return tokens
  },
}
const ALLOWED_TYPES = Object.keys(convertToTokens)

export default function caseConversion(str, from, to) {
  if (ALLOWED_TYPES.indexOf(from) === -1) {
    throw new Error(`${from} should be one of ${ALLOWED_TYPES}`)
  }
  if (ALLOWED_TYPES.indexOf(to) === -1) {
    throw new Error(`${to} should be one of ${ALLOWED_TYPES}`)
  }

  const tokens = convertToTokens[from](str)
  console.log(tokens)
  return str
}

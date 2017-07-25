function isCapital(ch) {
  return ch === ch.toUpperCase()
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
const ALLOWED_FROM = Object.keys(convertToTokens)

const tokensToCase = {
  constant: (tokens) => {
    return tokens.map(t => t.split('').map(c => c.toUpperCase()).join('')).join('_')
  },
}
const ALLOWED_TO = Object.keys(tokensToCase)

export default function caseConversion(str, from, to) {
  if (ALLOWED_FROM.indexOf(from) === -1) {
    throw new Error(`argument '${from}' should be one of ${ALLOWED_FROM}`)
  }
  if (ALLOWED_TO.indexOf(to) === -1) {
    throw new Error(`argument '${to}' should be one of ${ALLOWED_TO}`)
  }

  const tokens = convertToTokens[from](str)
  return tokensToCase[to](tokens)
}

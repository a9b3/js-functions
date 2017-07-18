import caseConversion from './case-conversion.js'
import expect         from 'expect'

describe('caseConversion', () => {
  describe('camel to constant', () => {
    it('fooBar should return FOO_BAR', () => {
      const testCase = caseConversion('fooBar', 'camel', 'constant')
      const answer = 'FOO_BAR'
      expect(testCase).toBe(answer)
    })

    it('foo should return FOO', () => {
      const testCase = caseConversion('foo', 'camel', 'constant')
      const answer = 'FOO'
      expect(testCase).toBe(answer)
    })
  })
})

import caseConversion from './case-conversion.js'
import expect         from 'expect'

describe('caseConversion', () => {
  it('fooBar to FOO_BAR, camel to constant', () => {
    const testCase = caseConversion('fooBar', 'camel', 'constant')
    const answer = 'foo_bar'
    expect(testCase).toBe(answer)
  })
})

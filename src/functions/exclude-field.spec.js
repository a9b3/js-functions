import excludeField from './exclude-field.js'
import expect       from 'expect'

describe('excludeField', () => {
  const testcase = {
    foo: 'foo',
    bar: 'bar',
    zed: 'zed',
  }

  const expectedResult = {
    foo: 'foo',
    bar: 'bar',
  }

  const exclude = [
    'zed',
  ]

  it(`${JSON.stringify(testcase)} should be ${JSON.stringify(expectedResult)} given exclude '${exclude}'`, () => {
    expect(excludeField(testcase, exclude)).toEqual(expectedResult)
  })
})

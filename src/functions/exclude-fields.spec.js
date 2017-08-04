import excludeFields from './exclude-fields.js'
import expect        from 'expect'

describe('excludeFields', () => {
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
    expect(excludeFields(testcase, exclude)).toEqual(expectedResult)
  })

  const testcase2 = {
    foo: 'foo',
    bar: 'bar',
  }

  const expectedResult2 = {
    foo: 'foo',
    bar: 'Omitted',
  }

  const exclude2 = [
    'bar',
  ]

  it(`${JSON.stringify(testcase2)} should be ${JSON.stringify(expectedResult2)} given exclude '${exclude2}' and 3rd arg 'Omitted'`, () => {
    expect(excludeFields(testcase2, exclude2, 'Omitted')).toEqual(expectedResult2)
  })
})

import envOverride from './env-override'
import expect      from 'expect'

describe('envOverride', () => {
  it('process.env.FOO overrides variable FOO', async () => {
    const testCase = {
      FOO: 'foo',
      BAR: 'bar',
    }

    const expectedResult = {
      FOO: 'bar',
      BAR: 'bar',
    }

    process.env.FOO = 'bar'
    expect(envOverride(testCase)).toEqual(expectedResult)
  })
})

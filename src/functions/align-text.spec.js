import alignText from './align-text.js'
import expect    from 'expect'

describe('alignText', () => {
  const str = `
    <div>
      yo
    </div>
  `

  const expected = [
    `<div>`,
    `  yo`,
    `</div>`,
  ].join('\n')

  it(`${str} should become ${expected}`, () => {
    expect(alignText(str)).toBe(expected)
  })
})

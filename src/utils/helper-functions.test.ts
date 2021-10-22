import { performCalc } from './helper-functions'

describe('performCalc()', () => {
  test('Simple multiplication', () => {
    expect(performCalc('8 x 8')).toBe('64')
  })
  test('Simple division', () => {
    expect(performCalc('8 ÷ 8')).toBe('1')
  })
  test('Multiple operators', () => {
    expect(performCalc('8 x 8 x 2')).toBe('128')
  })
  test('Multiple operatorslt', () => {
    expect(performCalc('8 x 4 ÷ 2 x 3')).toBe('48')
  })
  test('Simple addition', () => {
    expect(performCalc('8 + 8')).toBe('16')
  })
  test('Simple subtractionors and return the result', () => {
    expect(performCalc('8 - 8')).toBe('0')
  })
  test('Combination of operators', () => {
    expect(performCalc('8 x 4 ÷ 2 x 3 - 8')).toBe('40')
  })
  test('Sub/plus operators in centre', () => {
    expect(performCalc('8 x 4 - 2 x 3 - 8')).toBe('18')
  })
  test('Multiple and repeated operators', () => {
    expect(performCalc('1 + 6 x 2 - 4 + 4 ÷ 2 + 2 x 2 - 6')).toBe('9')
  })
  test('negative numbers', () => {
    expect(performCalc('-4 - 2')).toBe('-6')
  })
  test('decimal numbers', () => {
    expect(performCalc('2.2 + 6.4')).toBe('8.6')
  })
})

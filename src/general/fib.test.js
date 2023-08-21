import { fib } from './fib'

describe('Fibonnaci', () => {
  it('calculate values for position 3', () => {
    expect(fib(3)).toEqual(2)
  })

  it('calculate values for position 5', () => {
    expect(fib(5)).toEqual(5)
  })

  it('calculate values for position 8', () => {
    expect(fib(8)).toEqual(21)
  })

  it('process big values with memoized strategy', () => {
    expect(fib(50)).toEqual(12586269025)
  })
})

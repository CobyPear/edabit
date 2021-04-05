const { expect } = require('@jest/globals')
const whichIsLarger = require('../solutions/whichIsLarger')


it('should return "neither" if both functions return the same number', () => {
    const result = whichIsLarger(() => 100,
    () => 100)

    expect(result).toBe('neither')
})

it('should return "g" if function g returns a greater number than function f', () => {
    const f = () => 5
    const g = () => 10
    const result = whichIsLarger(f, g)

    expect(result).toBe('g')
})

it('should return "f" if function f returns a greater number than function g', () => {
    const f = () => -1000
    const g = () => -100
    const result = whichIsLarger(f, g)

    expect(result).toBe('g')
})
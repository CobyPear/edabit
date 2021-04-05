const { expect } = require('@jest/globals')
const possibleBonus = require('../solutions/tileTeamworkTactics')

it('should return false if both players start on the same tile', () => {
    const a = 6
    const b = 6
    const result = possibleBonus(a, b)
    expect(result).toBe(false)
})

it('should throw an error: positive integers only', () => {
    const a = -1
    const b = 3
    expect(() => possibleBonus(a, b)).toThrow('Error: positive integers only')
})

it('should return true if player a\'s position is equal to player b\'s position after adding an integer between 1-6', () => {
    let a = 3
    let b = 7
    let result = possibleBonus(a, b)
    expect(result).toBe(true)
    
    a = 0
    b = 6
    result = possibleBonus(a, b)
    expect(result).toBe(true)
    
})

it('should return false if player a\'s position is greater than player b\'s position after adding an integer between 1-6', () => {
    const a = 5
    const b = 3
    const result = possibleBonus(a, b)
    expect(result).toBe(false)
})
/**
 * 
 * Fruit salads are served best when the fruits are sliced and diced into small chunks!

For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

Worked Example
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
Examples
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

fruitSalad(["banana"]) ➞ "anaban"
 */

const fruitSalad = arr => {
    let fruitSlices = []

    arr.forEach(fruit => {
        // slice the fruit into 2
        // add the slices to the fruitSlices arr

        let sliceA = fruit.substr(0, fruit.length/2)
        let sliceB = fruit.substr(fruit.length/2, fruit.length)
        fruitSlices.push(sliceA, sliceB)

        console.log('sliceA: ', sliceA)
        console.log('sliceB: ', sliceB)
    })
    // sort the slices alphabetically
    fruitSlices.sort()
    finalSalad = fruitSlices.join('')

    return finalSalad
}

console.log(fruitSalad(['apple', 'pear','grapes']))
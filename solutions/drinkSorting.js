/**
 * You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/

const drinks = {
    a: [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ],
  b: [
    {name: "root beer", price: 50},
    {name: "lemonade", price: 200},
    {name: "water", price: 30},
    {name: "powerade", price: 150},
    {name: "grape", price: 75},
  ]
}
  

const sortDrinksByPrice = drinks => drinks.sort((a, b) => a['price'] - b['price'])

console.log(sortDrinksByPrice(drinks.a))
console.log(sortDrinksByPrice(drinks.b))
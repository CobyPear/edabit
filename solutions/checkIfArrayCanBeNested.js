/**
 Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
 */

const canNest = (arr1, arr2) => {
    // determine arr1 and arr2 min and max
    let arr1Min = Math.min(...arr1)
    let arr2Min = Math.min(...arr2)

    let arr1Max = Math.max(...arr1)
    let arr2Max = Math.max(...arr2)

    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        return true
    } else {
        return false
    }
}

// one line?
const canNestOneLine = (arr1, arr2) => (Math.min(...arr1) > Math.min(...arr2)) && Math.max(...arr1) < Math.max(...arr2) ? true : false

console.log(canNestOneLine([1, 2, 3, 4], [0, 6]))

console.log(canNestOneLine([3, 1], [4, 0]))

console.log(canNestOneLine([9, 9, 8], [8, 9]))

console.log(canNestOneLine([1, 2, 3, 4], [2, 3]))
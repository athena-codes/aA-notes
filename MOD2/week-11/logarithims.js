// --LOGARITHIMS

// -How many times do you need to divide by 'n' to get 1?

console.log(Math.log2(1))  // 0
console.log(Math.log2(2)) // 1
console.log(Math.log2(1024)) // 10


// --BINARY SEARCH
// -For binary search to work in log(n) time, it NEEDS to be SORTED
// -Also needs to be able to be accessed by index in constant O(1) time

let arr = [1, 2, 3, 4, 556, 7, 32, 65, 75 ,56 ,7567 ,566, 756]
let sorted = arr.sort((a, b) => a - b)
console.log(arr)

let low = 0
let high = arr.length - 1
let target = 4
let mid = (high + 0) / 2  // if index is uneven, use Math.floor to round index place


console.log(arr[mid])


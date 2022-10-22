// --Sets
// cannot have duplicate values
// unordered, has no indexes
// can check from an element in constant time

const set = new Set([1, 2, 3, 4, 5])

// console.log(set.has(1)) // => true, O(1) time
// ^ returns boolean if set coontains value

console.log(set.add(6)) // adds element to end of a set

set.delete(1)  // deleted input value

console.log(set)

set.add(2)  // nothing happens b/c a set cannot have duplicate values
console.log(set)


// --CALLSTACKS

// JS is a single threaded language, can only do one thing at a time
// stack works like filo - first in, last out

// function foo() {
//    return 2 + bar()
// }

// function bar() {  // 2nd stack
//     return 6 + baz()
// }

// function baz() {  // 3rd stack
//     return 3
// }

// console.log(foo())  // 1. first stack

// Function execues like foo calls bar, bar calls baz and baz returns last finishing stack



// --RECURSION

// Function that calls itself until it meets condition
// 3 parts:
// 1. base case - when function should end
// 2. recursive case - when we should recurse
// 3. recursive step - how base case is moved

let nums = [1, 2, 3, 4, 5 ,6]

// const sumArr = (nums) => {
//   // 1 .base case
//   if(nums.length === 0) {
//     return 0
//   } else {
//    // 2. recursive step
//    let firstNum = nums[0]
//    let restOfNums = nums.slice(1)
//    // 3 . recursive case
//    return firstNum + sumArr(restOfNums)
//   }
// }

// // Call stack goes like 6 => 11 => 15 => 18 => 20 =>

// console.log(sumArr(nums))



// Example 2:

let sumArr2 = (nums) => {
    if (nums.length === 0) {
        return null    // base case
 } else {
   let newNums = nums.pop()  // recursive case is nums.pop()
    return newNums + sumArr2(nums)
    // until array is empty, nums are popped and added together
 }
}

console.log(sumArr2(nums))

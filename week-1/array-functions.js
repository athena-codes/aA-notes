// //--Function that will return sum of all numbers in an array;

// function sumArray(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         sum += num
//     }
//     return sum
// }
// console.log(sumArray([1,  5, 10]))



// //--Function that returns TWO arrays as ONE whole array;

// function combineArray(array1, array2) {
//     let newArray = array1.concat(array2)
//     return newArray
// }
// console.log(combineArray([1, 2, 3], [4, 5, 6]))



// //--Function that DOUBLES all numbers in an array;

// function doubler(numbers) {
//     let newArray = []

//     for (let i = 0; i < numbers.length; i++) {
//         let oldNum = numbers[i]
//         let newNum = oldNum * 2

//         newArray = newArray.concat(newNum)
//     }
//     return newArray
// }
// console.log(doubler([2, 4, 6, 8]))



// //--Function to find range of numbers min-max inclusive & return as array;

// function range(min, max) {
//     let num = []
//     for (let i = min; i <= max; i++) {
//         num.push(i);
//     }
//     return num
// }
// console.log(range(1, 10))



// //--Function to print all factors of a number and return in array;

// function factorsOf(num) {
//     let factors = []  // defining new empty array that will be returned

//     for (let i = 1; i <= num; i++) {  // i starts at 0, i <= num (arg), i increments
//         // by one
//         if (num % i === 0) {   // if num mod. i has remainder of 0
//             factors.push(i)   // push (add) element (i) to empty array (factors)
//         }
//     }

//     return factors   // return new array
// }
// console.log(factorsOf(10))



// //--Function that finds smallest value in array and returns that number;

// function minValue(nums) {
//     if (nums.length === 0) {
//         return null
//     }
//     let minVal = null

//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i]
//         if (minVal === null || element < minVal) {
//             minVal = element

//         }
//     }
//     return minVal
// }
// console.log(minValue([3, 8, 7, 6, 1]))

// let nums = [1 , 2, 3 ,4]

// let sum = nums.reduce(function(accum, ele) { // 1st arg always accumulator, second is first element
//    return accum + ele
// })

// console.log(sum)  // returns 6

// --Reusable Parameter function--

// let doSum = function (accumulator, currentValue) {
//     return accumulator + currentValue
// }

// // Array reduce example 1
// let numbers = [0, 1, 2, 3];
// let theSum = numbers.reduce(doSum, 0);

// console.log(theSum);
// // Expected output: 6



// --Inline Parameter Function--

// let numbers = [0, 1, 2, 3];
// let initialValue = 0;

// let theSum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, initialValue);

// console.log(theSum);
// // Expected output: 6



//--Wrapper Function--
// wrapper function

// let arraySum = function (array) {
//     let initialValue = 0;

//     // Array reduce example 3
//     return array.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, initialValue);
// };

// let numbers = [0, 1, 2, 3];
// let theSum = arraySum(numbers);

// console.log(theSum);
// // Expected output: 6

// Examples

// const arr = [1, 2, 3, 4];
// let result = arr.reduce(function (acc, curr) {
//     return acc * curr;
// });

// console.log(result);   // => 24, each num in array multiplied by last


const arr = [26, 574, 391, 47, -2];
console.log(arr.reduce(function (acc, num) {
    if (num < acc) return num;
    else return acc;
}));

/* EXPLANATION
The accumulator is being checked against each value in the array.
If the current element is smaller than the accumulator, then the accumulator
is set to the current element.This will return the minimum value in the array. */

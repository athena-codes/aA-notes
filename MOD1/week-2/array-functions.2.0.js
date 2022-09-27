// //--Function to return product of all numbers in an array;

// let product = function (nums) {
//     let product = 1

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         product *= num
//     }
//     return product
// }
// console.log(product([10, 3, 5, 2]))



// //--Function to find largest value in an array of numbers;

// let maxValue = function (nums) {

//     if (nums.length === 0) {
//         return null
//     }

//     let largest = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]

//         if (num > largest) {
//             largest = num

//         }
//     }
//     return largest
// }
// console.log(maxValue([1, 8 ,2 ,4]))



// //--Function to find average of all numbers in an array;

// let avgVal = function (arr) {
//     if (arr.length === 0) {
//         return null
//     }
//     let sum = 0   // sum starts count at 0
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i]
//         sum += num
//     }
//     return sum / arr.length
// }
// console.log(avgVal([5, 10]));

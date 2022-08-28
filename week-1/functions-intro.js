// //--Function to find the average of 2 numbers;

// function averageOfTwo(num1, num2) {
//     let sum = num1 + num2
//     let averageOfTwo = sum / 2
//     return averageOfTwo
// }
// console.log(averageOfTwo(3, 7));


// //--Function to divide numbers;

// function divideByThree(num) {
//     let divideByThree = num / 3
//     return divideByThree
// }
// console.log(divideByThree(9));


// //--How to determine if number is odd using  a function;

// function isOdd(num) {
//     return num % 2 !== 0
// }
// console.log(isOdd(5))


// //--Function that will return true or false if a number is prime;

// function isPrime(number) {

//     for (let i = 2; i < number; i++) { // i= 2 bc prime num onlt divisbnle by 1
//         // and itself
//         if (number % i === 0) { // if number % 2 is 0, its not prime num
//             return false   // so return false
//         }
//     }
//     return true
// }
// console.log(isPrime(7))


// /*--Function that will print every number in sequence from low to
// high inclusively (including lowest and highest num); */

// function logBetween(lowNum, highNum) {
//     for (let i = lowNum; i <= highNum; i++) {
//        console.log(i)
//     }
// }
// console.log(logBetween(-10, 10))


// //--Function that prints low to high number at specific intereval;

// function logBetweenStepper(min, max, step) {
//     for (let i = min; i < max; i += step) {
//         console.log(i)
//     }
// }
// console.log(logBetweenStepper(2, 10, 2))


// //--Function to find the square of a number;

// let square = function (number) {
//     return number * number
// }
// console.log(square(4))

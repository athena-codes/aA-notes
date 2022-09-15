
// // Prints numbers from array

// let array = [1, 2, 3, 4, 5]

function printArray(arr, i = 0) {

    // Base Case: index has reached the end of the array
    if (i >= arr.length) return;

    // Print the value
    console.log(arr[i]);

    // Call the function recursively,
    // moving the index one step closer to the base case.
    printArray(arr, i + 1);
}
// console.log(printArray(array))



// // Example 2: multiplies 2 numbers

// function multiply(num1, num2) {
//     // base case
//     if (num2 == 0) return 0;

//     return num1 + multiply(num1, num2 - 1);
// }

// console.log(multiply(5, 3))  // 15



// Countdown numbers from a starting number

// let countdown= (startingNumber) => {

//     if (startingNumber === 0) {
//         console.log("Time's up!");
//         return;
//     }

//     console.log(startingNumber);
//     countdown(startingNumber - 1);
// }

// console.log(countdown(5))



// Exponent Recursion

// if (power === 0) {
//     return 1
// }
// if (power < 0) {
//     return 1 / num * exponent(num, power + 1)

// } else if (power > 0)
//     return num * exponent(num, power - 1)
// }



// Merge sort

// let array = [4, 1, 3, 2, 0, 1, 7, 10, 9, 20]

// function merge(arr, i = 0) {

//     if (arr.length === i) {
//         return arr

//     } if (arr[i + 1] < arr[i]) {
//         let x = arr[i + 1]
//         arr[i + 1] = arr[i]
//         arr[i] = x
//     }
//      return merge(arr, i + 1)
//  }


// console.log(merge(array))


// Sum all numbers of an integer

function sum(num) {

    if (num === 0) {
        return 0
     }
   return num + sum(num - 1)
}

console.log(sum(10))  // => 55
console.log(sum(5))  // => 15

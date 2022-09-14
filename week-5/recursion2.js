
let array = [1, 2, 3, 4, 5]

function printArray(arr, i = 0) {

    // Base Case: index has reached the end of the array
    if (i >= arr.length) return;

    // Print the value
    console.log(arr[i]);

    // Call the function recursively,
    // moving the index one step closer to the base case.
    printArray(arr, i + 1);
}

console.log(printArray(array))

// Example 2:

function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;

    return num1 + multiply(num1, num2 - 1);
}

console.log(multiply(5, 3))  // 15


let countdown= (startingNumber) => {

    if (startingNumber === 0) {
        console.log("Time's up!");
        return;
    }

    console.log(startingNumber);
    countdown(startingNumber - 1);
}

console.log(countdown(5))

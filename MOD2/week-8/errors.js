// RangeError: toExponential() argument must be between 0 and 100
//     at Number.toExponential(<anonymous>)

// let x = 123;
// let y = 123;
// console.log(x.toExponential(y))

// Fixed Version

let x = 123;
let y = 100;
console.log(x.toExponential(y))


// Creating your own errors;

// Syntax:
//  new Error([message[, fileName[, lineNumber]]])

// Error constructor is also somewhat unique in that you can call it with or without
//the new keyword and it will return a new Error object;
const first = Error("I am Error");
const second = new Error("I, too, am Error");

console.log(first); // Error: I am Error
console.log(second); // Error: I, too, am Error


// 'Throw' keyword - stops program execution
// function giveMeNumber(num) {
//     if (typeof num !== "number") {
//         throw new Error("Give me a number!");
//     } else {
//         return "yay number!";
//     }
// }

// console.log(giveMeNumber(1)); // prints "yay number!";
// console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
// console.log(giveMeNumber(1)); // doesn't get run



// Try...catch - does not stop program execution
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("cannot divide by zero");
    } else {
        return a / b;
    }
}

try {
    console.log(safeDivide(30, 0));
} catch (error) {
    console.error(error.name + ": " + error.message); // Error: cannot divide by zero
}
// the above error will be caught allowing our program to continue!
console.log("hello"); // still prints  "hello"


// Try..catch with instanceof on specific JS errors
function callThatArg(arg) {
    arg(); // this will cause a TypeError because callThatArg is being passed a number
}

try {
    callThatArg(42);
    console.log("call successful"); // this line never executes
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Wrong Type: ${error.message}`); // prints: Wrong Type: arg is not a function
    } else {
        console.error(error.message); // prints out any errors that aren't TypeErrors;
    }
}

console.log("done"); // prints: done


// Finally block - runs whether or not error occurs
function trySafeDivide(n) {
    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message); // Error: cannot divide by zero
        return;
    } finally {
        console.log("This will always run");
    }
}

trySafeDivide(1, 0)

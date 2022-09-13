// Recursion

// Russian matryoshka doll psuedocode example
// function processDoll (doll) {
//   // 1. Base case - stopping condition
//   if(chocolate = found) {
//     return "yum"
//  else if (there are no more dolls) {
//     return "no chocolate here"
//  }
// // 2. if base case fails, recursive call to itself
// } else {
//     processDoll(smaller-doll)
//   }
// }


// Factorial Example (number * all nums less than that)

function factorial(n) {
  if (n === 1 || n === 0)
    return 1
  else
    return n * factorial(n-1)
}

console.log(factorial(4))

// Countdown Example
// 2 cases:
// Base Case: num === 0
// Recursive Case: num > 0
// 1 step:
// Recursive Step: n - 1

function countdown(num) {
    if (num === 0) {
      return
    }
    console.log(num)
    countdown(num -1)
}

console.log(countdown(5))

// Echo Example:

function echo(word) {
    if (word.length > 1) {
     console.log(word.toUpperCase())  // 1. first call

     let response = echo(word.slice(1)) // 2. second stack frame added to top

     console.log(response)
     return word

    } else {   // once condition is met (recursion stops, frames clear )
    console.log(word.toUpperCase())
      return word
    }
}

console.log(echo("howdy")) // 1. first stack frame

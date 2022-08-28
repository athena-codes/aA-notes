
//-Example of usage of .splice, .push, .unshift, .pop, .concat, .shift, .slice

let names = ["athena", "middlename", "chiarello"]
names.splice(1, 1, "rose")

console.log(names)   // splice removed index 1 and replaced at index 1 a new string


let numbers = [1, 2, 3, 5]
let newArr = numbers.splice(1) // removed all values after index 1 and created new array w values
                               // modifies old array to only remaining values not spliced
console.log(newArr)           // moves 2, 3, 5 to new array
console.log(numbers)          // only  '1' left
console.log(numbers.push(2, 3, 4))   /* adds new values to original array in place of ones
                                     that were spliced out - only prints length to console */

console.log(numbers)                     // pushed values of 2, 3, 4 to 'numbers' array and mutated it

console.log(newArr.unshift(numbers[0]))  /* modifies newArr to now include 'numbers' at
                                         index of 0, only prints length to console */
console.log(newArr)

let lastNum = newArr.pop(3)  // removed '5' from array


console.log(newArr) // newArr now is [1, 2, 3]
console.log(lastNum) // 5 was popped from newArr and now variable named lastNum

console.log(numbers.push(lastNum)) /* takes 'lastNum' variable that came out of 'newArr' and
                                      pushes it to end of 'numbers' array */
console.log(numbers)     //pushed lastNum to end of array
console.log(newArr)      /* since 5 was popped out of newArr it has mutated to have removed
                           that variable out of the array */

let lastArr = numbers.concat(newArr)
console.log(lastArr)  /* concatenated numbers and newArr, now newArr is included at
                         end of numbers array */

console.log(lastArr.shift())   // removed first element from array, being 1 and mutates it
console.log(lastArr)          // mutated array

console.log(lastArr.slice(2, 5))  // slices variables from index 2-5 (not including last
// index
console.log(lastArr)    // ^^ does not mutate original array!!!

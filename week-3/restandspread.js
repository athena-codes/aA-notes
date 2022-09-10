
    //--Rest Parameters
/*Rest parameter syntax allows us to capture all of a function's incoming arguments into an array.
Let's take a look at the syntax: */

// function logArguments(...allArguments) {
//     console.log(allArguments);
// }

// logArguments("apple", 15, 3);  // prints: ["apple", 15, 3]

//--An expanded example:

// function adder(num1, ...otherNums) {
//     console.log("The first number is: " + num1);
//     let sum = num1;

//     // captures all other arguments into an array and adds them to our sum
//     otherNums.forEach(function (num) {
//         sum += num;
//     });

//     console.log("The sum is: " + sum);
// }

// adder(2, 3, 4);
// prints out:
// The first number is: 2
// The sum is: 9


//--Spread Syntax:

// let numArray = [1, 2, 3];

// // here we are taking `numArray` and *spreading* it into a new array where
// // comma separated elements are expected to be
// let moreNums = [...numArray, 4, 5, 6];

// console.log(moreNums)
// // prints => [1, 2, 3, 4, 5, 6]


// //--Spread Examples using Objects:
// // Using the spread operator you can spread the key-value pairs from one object and into another new object.

// let colors = { red: "scarlet", blue: "aquamarine" };
// let newColors = { ...colors };

// console.log(newColors)
// // prints => { red: "scarlet", blue: "aquamarine" };


//--Here is a common example of spreading an array into a function's arguments:

// function speak(verb, noun) {
//   return "I like to go " + verb + " with " + noun + ".";
// }

// let words = ["running", "Jet"];

// console.log(speak("running", "Jet")); // => I like to go running with Jet.
// console.log(speak(...words)); // => I like to go running with Jet.

/* Using spread allowed us to pass in the words array, which was then broken down
into the separate parameters of the speak function. */


//--More Rest + Spread Practice

// //Rest:
// function colorPicker(color,...otherColors) {
//   let string = "I picked the following colors:" + color

//   otherColors.forEach(function(arg) {
//     string = string + ", " + arg
//   })
//   return string
// }

// // console.log(colorPicker("red", "blue", "yellow")) // rest para. allows for unlimited num of args.

//Spread:
let array1 = ["zebra", "bird", "parrot"]
let array2 = ["lion", "bison", "panther"]

let array3 = [...array1,...array2]  // combines both arrays sep. by commas
console.log(array3)

// let obj1 = {car: "Nissan", color: "red"}
// let obj2 = {wheels: 4, radio: "loud"}

// let obj3 = {...obj1,...obj2}
// // console.log(obj3)      // combines both object key-value pairsa into one object

// //--Spreading elements in array into parameters of a function

// function colorPicker(color, color2) {
//   return  "I picked the following colors: " + color + " and " + color2
// }

// let colorArray = ["red", "blue"]
// console.log(colorPicker(...colorArray)) // => "I picked the following colors: red and blue"

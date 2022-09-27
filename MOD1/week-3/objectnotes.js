//--Iterating Thru Objects--

//--To access values in an Object:
let obj = { name: "Rose", cats: 2 };

for (let key in obj) {
    let value = obj[key];
    console.log(value);
}


// //--An example of using a descriptive name for a key variable:

let employees = {
    manager: "Angela",
    sales: "Gracie",
    service: "Paul"
};

for (let name in employees) {
    let person = employees[name];
    console.log(person);
}



//--Methods vs. Functions:

// let dog = {
//     name: "Fido"
// };

// // defining a new key-value pair where the *function name* is the key
// // the function itself is the value!
// dog.bark = function () {
//     console.log("bark bark!");
// };

// // this is the same thing as above just using Bracket Notation
// dog["speak"] = function (string) {
//     console.log("WOOF " + string + " WOOF!!!");
// };

// dog.bark(); // prints `bark bark!`
// dog.speak("pizza"); // prints `WOOF pizza WOOF!!!`


//--Iterating through keys using Object.keys
// The Object.keys method accepts an object as the argument and returns an array of the keys within that Object.

//  let dog = { name: "Fido", age: "2" }
//      console.log(Object.keys(dog))  // => prints ['name', 'age']


//  let cup = { color: "Red", contents: "coffee", weight: 5 }
//      console.log(Object.keys(cup)) // => prints ['color', 'contents', 'weight']


// //The return value of Object.keys method is an array of keys - which is useful for iterating!


// //--Iterating through keys using Object.values
// // The Object.values method accepts an object as the argument and returns an array of the values within that Object.

// let dog = { name: "Fido", age: "2" }
// console.log(Object.values(dog)) // => prints ['Fido', '2']

// let cup = { color: "Red", contents: "coffee", weight: 5 }
// console.log(Object.values(cup)) // => prints ['Red', 'coffee', 5]

// //The return value of Object.values method is an array of values - which is useful for iterating!


// //--Iterating through an Object's keys & values
// // if you want both the keys and the values corresponding to each other in an array;
// //The Object.entries method accepts an object as the argument and returns an array of the[key, value] pairs within that Object.

// let cat = { name: "Freyja", color: "orange" }
// console.log(Object.entries(cat))
    // => prints [['name', 'Freyja'], ['color', 'orange']]



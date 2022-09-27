//--Defining Objects Keys/Values--

let user = {
    name: "Athena",
    age: 21,
    favorites: [
        "JavaScript",
        "gaming",
        "kitties"
    ],
    foods: {
        food1: "noodles",
        food2: "pizza"
    }
}
// --To access diff pieces of an obj
// console.log(user.age)      // dot notation
// console.log(user["age"])  // bracket notation

// let newArr = [user]
// console.log(newArr)  // creates array that holds obj keys/values

// console.log(user.foods.food1)  // to access obj inside obj

// let age = user["age"]  // define a variable to represent key as string in obj
// console.log(age)

//--Iterating thru Objects/ How to call certain values--

// function objIterate(obj,str) {
//     for (let key in obj) {
//         let value = obj[key]
//         if(key === str) {
//             return true
//         }
//     }
//     return false
// }

// console.log(objIterate(user, "name"))

//--How to iterate nested arrays/objects in objects--
// function objIterate(obj, str) {
//     for (let key in obj) {
//         let value = obj[key]
//         if (value.isArray()) {
//             for (let i = 0; i < key.length; i++)
//             return true
//         }
//     }
//     return false
// }

// console.log(objIterate(user, "name"))

// // --Array Destructuring--

// --Swapping variables

// let students = ["james", "dani", "pierre"]
// let [studentone, studenttwo, studentthree] = students

// console.log(studentone, studenttwo);

// [studentone, studenttwo] = [studenttwo, studentone]

// console.log(studentone, studenttwo)

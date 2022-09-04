//objects

//syntax {}
//arrays []

//objects contain key value pairs
// let obj = {
//     firstName:"patrick",
//     lastName: "Story",
//     age:25,
//     favoriteGames:{
//         game1:"dota2",
//         game2:"starcraft",
//         game3:"wow"

//     },
//     foods:["hotdogs","pizza","korean food"]
// }
//bracket notation, must be a string
// let name = "firstName"
// console.log(obj["favoriteGames"]["game1"])
// //dot notation
// console.log(obj.favoriteGames.game1)

//adding key value pairs

// obj["car"] = "sonata"
// obj.favoriteGames.game4 = "call of duty"

// // console.log(obj.car)
// console.log(obj.favoriteGames.game4)

// object iteration

// let obj = {
//     firstName:"patrick",
//     lastName: "Story",
//     age:25,
//     favoriteGames:{
//         game1:"dota2",
//         game2:"starcraft",
//         game3:"wow"

//     },
//     foods:["hotdogs","pizza","korean food"]
// }

// // console.log(obj["firstName"])
// function objectIteration(obj,string){

//     for(let key in obj){
//         console.log(key)
//         let value = obj[key];

//         // if(value === string){
//         //     return true

//         // }
//     }
//     return false
// }

// // for(let i = 0; i < arr.length; i++){
// //     let ele = arr[i];

// // }
// let arr = [1,2,3]

// console.log(objectIteration(obj,"patrick"))



// let obj = {
//     firstName:"patrick",
//     lastName: "Story",
//     age:25,
//     favoriteGames:{
//         game1:"dota2",
//         game2:"starcraft",
//         game3:"wow"

//     },
//     foods:["hotdogs","pizza","korean food"]
// }

//Object Methods

// Object.keys(obj) returs an array of keys
// Object.values(obj) returs an array of values
// Object.entries(obj) array of key value pairs

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

//reference type
// let biff = {
//     type: 'dog',
//     age: 10,
// };

// let buster = biff;
// buster.age = 0;

// console.log(biff, buster);


//Object Destructuring

// obj = {
//     firstName: "patrick",
//     lastName:"story"
// }

// let firstName =obj.firstName
// let lastName = obj.lastName

// console.log(firstName, lastName)

// let {person,animal} = {person:"patrick",animal:"panda"}

// console.log(person,animal)

// let {person:name,animal:bear} = {person:"patrick",animal:"panda"}

// console.log(name,bear)

//array destructuring

// let arr = [1,2,3]

// let num1 = arr[0]
// let num2 = arr[1]

// // console.log(num1,num2)

// // let [firstName,lastName] = ["patrick","story",25]

// function getObj(){
//     return {}
// }

// let [firstName,lastName,age] = ["blah", "blah", 23]

// // console.log(firstName,lastName,age)

// getObj()[lastName,age] = [age,lastName]

// console.log(lastName,age)
// let students = ["james","dani","pierre","sydney"]
// [studentone,studenttwo] = [studenttwo,studentone]

// console.log(studentone,studenttwo)


//REST (...strings) Rest takes the rest of the arguments and puts them into an array and single parameter

// function yell (...string){
// let newArr = []
//     for(let i=0; i<string.length; i++){
//         let ele = string[i];
//         newArr.push(ele.toUpperCase())
//     }
// return newArr.join(" ")
// }

// console.log(yell("caleb","patrick","jovan","joshua","kisha"))

//SPREAD ... Spread takes some data and 'spreads' it out of it's containing brackets.
function myArrC(){
    return [6,7,8,9]
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1,...arr2,...myArrC().reverse()]


// // console.log(arr1, arr2)
console.log(arr3)

// let obj = {
//     firstName: "patrick"
// }

// let obj2 = {
//     lastName:"story"
// }

// let obj3={
//     ...obj,
//     ...obj2
// }
// console.log(obj3)



//  let newObj = {...arr1,...arr2}

//  console.log(newObj)

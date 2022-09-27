// const scopr, can not be reassigned but can be mutated

// const arr = [1, 2, 3, 4, 5 ,6, 7, 8 ,9, ]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 7) {
//      arr[i] = null
//    }
// }
// console.log(arr)

//var - function scoped, reassignable

// var name = "athena"

//  function varSucks() {
//     var name = "hi"

//  for (var i = 0; i < 4; i++) {
//    var name = "bye"

//    if (i === 2) {
//     var name = "hello"
//    }
// }
//  return name
// }

// console.log(name)


// Arrow Functions
// alway anonymous, implicit return (one line), optional parenthesis for single parameter

// const multiLine = (name) => {
//    return `hello ${name}` // string interpolation
// }

// console.log(multiLine("Athena"))

// const singleLine = (name) => {
// `hello ${name}`
// }

// console.log(singleLine("Athena"))


const arr = [1, 2, 3]

const addOne = arr.map(num => num + 1)

console.log(addOne)

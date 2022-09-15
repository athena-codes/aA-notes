
/* Recursion: A function that calls itself until some condition is met
    - Looping mechanism
*/

let arr = ["Hello", "Crazy", "Cool", "World"]

// function printIterate(arr) {

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//  }
// }
// console.log(printIterate(arr))



// function myFunc(arr) {
//     console.log("Function executed")
// }
// console.log(myFunc())


// let myFunc = (array, word = 0) => {

//     if (word >= array.length) {
//         return;
//     }
//     console.log(array[word]);
//    return myFunc(array, word + 1);
//  }


// myFunc(arr)   // returns null


let myFunc2 = (array, word) => {

    if (word != undefined) {
        console.log(word)
    }
    if (array.length === 0) {
        return undefined
    }

    let firstWord = array[0]
    return myFunc2(array.slice(1), firstWord)
}

// console.log(myFunc2(arr))
myFunc2(arr)

// Using push

// function reverseArr(array) {
//    let newArr = []

//     if (array.length === 0) {
//         return newArr
//     }
//     newArr = reverseArr(array.slice(1))
//      newArr.push(array[0])
//       return newArr
// }

// console.log(reverseArr(arr))



// Using Unshift

function reverseArr(array) {
    let newArr = []

    if (array.length === 0) {
        return newArr
    }
    newArr = reverseArr(array.slice(0, array.length - 1))
    newArr.unshift(array[array.length - 1])
    return newArr
}

console.log(reverseArr(arr))



console.log(1000000 % 2)

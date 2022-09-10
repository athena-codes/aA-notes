
// // Using Callback Functions

// let superAdd= (num1, num2, cb) => {
//     console.log(cb)  // parameter to hold function
//   let sum = num1 + num2
//   let res = cb(sum)
//   return res
// }

// let doubler = (n) => {
//     return n * 2
// }

// let negate = (n) => {
//     return -1  * n
// }

// // don't need to call function , just pass in the name (return value not execution)

// console.log(superAdd(3, 2, doubler))  // first adds 3 + 2 , then doubles (10)
// console.log(superAdd(3, 2, negate)) // (-5)



// Example 2:

// let superAdd = (num1, num2, cb) => {
//    if (cb === undefined) {        // makes cb parameter optional, code runs without returning undefined
//     return num1 + num2
//    } else {
//     let sum = num1 + num2
//     return cb(sum)
//    }
// }

// console.log(superAdd(80, 1, Math.sqrt))
//     console.log(superAdd(80, 1))

// // let res = superAdd(3, 2, function(n) {
// //     return n * 2
// // })

// // console.log(res)


// // let foo = function (a, b, c) {
// //     console.log(a)
// //     console.log(b)
// //     console.log(c)

// // }

// // console.log(foo('alpha', 'bravo', 'charlie'))



// Multiple Callbacks

let greaterResult = (num, cb1, cb2) => {
    let res1 = cb1(num)
    let res2 = cb2(num)

    if (res1 > res2) {
        return res1
    } else {
        return res2
    }
}

// let doubler = (n) => {
//     return n * 2
// }

// let squarer = (n) => {
//     return n * n
// }

// console.log(greaterResult(5, doubler, squarer)) // 25
// console.log(greaterResult(1, doubler, squarer)) // 2


// callbacks practice

// function soundMaker (sound, times) {
//     // closure
//     function makeSound () {
//         console.log(`${sound}`)
//     }
//     for(let i = 0; i < times; i++) {
//        makeSound()
//     }
// }

// console.log(soundMaker("woof", 5))


function summation(arr) {
    let sum = 1

    function summizer() {
        for(let i = 0; i < arr.length; i++) {
            sum *= arr[i]
        }
    }
    summizer()

    return sum
}
console.log(summation([1, 2, 3, 4]))


// let count = 0

// function foo() {
//     console.log("time is up!")
//     count++
//     if(count == 10) {
//         clearInterval(interval)
//     }
// }

// const interval = setInterval(foo, 500)
// // console.log(interval)



// ReFactored Version 

let count = 0
const interval = setInterval(function () {
    console.log("time is up!")
    count++
    if (count == 10) {
        clearInterval(interval)
    }
}, 500)
// console.log(interval)

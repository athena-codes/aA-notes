// //--forEach array method

// let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"]

// parks.forEach(function(ele, i, array)  {  // iterates thru array in order, pass in function
//   console.log(ele, i)                    // 1st parameter  always represents ele of array
//   console.log(i)                        // 2nd parameter represents index
//  console.log(array)                     // can return as an array too w 3rd parameter

// })

// let str = ''

// parks.forEach(function(ele) {  // concatenates all strings together
//   str += ele
// })
// console.log(str)


// forEach broken down

peeps = ['athena', 'rose', 'chiarello', 'hi']

// peeps.forEach(function (el, i) {
//     console.log(`${el} is at index ${i}`)
// })

let myForEach = function(array, cb) {
   for (let i = 0; i < array.length; i ++) {
    let el = array[i]
    cb(el, i, array)
   }
}

myForEach(peeps, function (el, i) {
    console.log(`${el} is at index ${i}`)
})

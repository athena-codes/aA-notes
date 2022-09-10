//--Map Method - modify elements of existing array to give new array

// let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"]

// // let newParks = parks.map(function(ele) {  // map iterates, must be saved as var
// //   return ele.toUpperCase()
// // })

// // console.log(newParks)  // => [ 'ZION', 'YELLOWSTONE', 'ACADIA', 'YOSEMITE' ]

// let newParks = parks.map(function (ele) {  // map iterates, must be saved as var
//     return ele + 'National Park'
// })
// console.log(newParks)  /* => [
                                // 'ZionNational Park',
                                //     'YellowstoneNational Park',
                                //     'AcadiaNational Park',
                                //     'YosemiteNational Park'
                                // ] */


peeps = ['athena', 'rose', 'chiarello', 'hi']

// let newPeeps = peeps.map(function (el) {
//    return el.toUpperCase() + '!!!!'
// })



// map method broken down

let myMap = function (array, cb) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let el = array[i]
        let res = cb(el, i, array)
        newArray.push(res)
  }
  return newArray
}

let res = myMap([4, 9, 81, 25], function (n) {
    return n * 2
})

console.log(res)

// let newPeeps = myMap(peeps, function (el) {
//     return el.toUpperCase() + '!'
// })

// console.log(newPeeps)

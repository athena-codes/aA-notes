//--Filter Method - create new array that's subject of original array that meet a certain condition

// let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"]

// let yParks = parks.filter(function(ele) {   // must be defined as var
//   return ele[0] === 'Y'      // must return boolean
// })

// console.log(yParks)


// let selected = parks.filter(function (ele) {   // must be defined as var
//     return ele.includes('o')    // must return boolean
// })

// console.log(selected)   // => [ 'Zion', 'Yellowstone', 'Yosemite' ]

// let selectedParks = parks.filter(function (ele) {   // must be defined as var
//     return ele.length > 7   // must return boolean
// })

// console.log(selectedParks)  // => [ 'Yellowstone', 'Yosemite' ]


// filter broken down

let veggies = ['lettuce', 'celery', 'cabbage', 'watercress']

// let result = veggies.filter(function (ele) {
//   return ele.includes('a')
// })

let myFilter = function(array, cb) {
  let selectedItems = []
  array.forEach( function(el, index) {
      if (cb(el, index, array) === true) {
      selectedItems.push(el)
    }
  })
  return selectedItems
}


let result = myFilter(veggies, function (ele) {
  return ele.includes('l')
})

console.log(result)

console.log(result)

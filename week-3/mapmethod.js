//--Map Method - modift elements of existing array to give new array

let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"]

// let newParks = parks.map(function(ele) {  // map iterates, must be saved as var
//   return ele.toUpperCase()
// })

// console.log(newParks)  // => [ 'ZION', 'YELLOWSTONE', 'ACADIA', 'YOSEMITE' ]

let newParks = parks.map(function (ele) {  // map iterates, must be saved as var
    return ele + 'National Park'
})
console.log(newParks)  /* => [
                                'ZionNational Park',
                                    'YellowstoneNational Park',
                                    'AcadiaNational Park',
                                    'YosemiteNational Park'
                                ] */

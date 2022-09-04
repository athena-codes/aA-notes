//--forEach array method

let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"]

parks.forEach(function(ele, i, array)  {  // iterates thru array in order, pass in function
  console.log(ele, i)            // 1st parameter  always represents ele of array
  console.log(i)                // 2nd parameter represents index
 console.log(array)            // can return as an array too w 3rd parameter

})

let str = ''

parks.forEach(function(ele) {  // concatenates all strings together
  str += ele
})
console.log(str)

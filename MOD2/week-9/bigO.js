/* How slow is algorithim? As input scales how does algo scale
   1. Figure out core part - console.log
   2. Find ratio, how many times does core part happen based on how large input is
   3. Set variable (n) to represent input length
   4. How does algo grow as n grows
 Example below scales 1:1 w/ the size of n */

// --Time Complexity

// const data = ['A', 'B', 'C']
// const data2 = [1, 2, 3, 4, 5]

// for(let j = 0; j < data2.length; j++) {
//     console.lof(data2[j])
// }
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i])
// }

// O(n)  // how algo scales w the size of input based time, grows linearly 1:1
// O(n + a)  // now, algo scales based on length of data + data2, scales off both of those


// // Nested loop for 2 data inputs

// for(let j = 0; j < data2.length; j++) {
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i] + data2[j]) // loop every ele in data2, for each of those eles also loops over each ele in data
//  }
// }

// O(n * a) // algo loops one more time each ele in data2 for each ele in data, poor performance, scales quickly


// // Nested loop for one data input

// for(let j = 0; j < data2.length; j++) {
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i] + data[j]) // loop every ele in data2, for each of those eles also loops over each ele in data
//   }
// }

// O(n^2) // also poor performance, scales very quickly; slow algo






// // --Space Complexity

// const data = ['A', 'B', 'C']

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i])

// O(1) // constant, space does not change as input size scales


// const out = []

// for (let i = 0; i < data.length; i++) {
//     out[i] = data[i]   // creating new array from values inside of data array
// }

// O(n) // output is same length as input, both 3



// for (let i = 0; i < data.length; i++) {
//     out[i] = []
//     for (let i = 0; i < data.length; i++) {
//     out[i][j] = data[i]    // outputs 3 new array with each ele repeated 3 times (n times)
//  }
// }

// O(n^2)  // output is 3 times size of output b/c length of input is 3
// // output scales larger and larger as input scales

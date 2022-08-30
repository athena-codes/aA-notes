// //--How to generate all UNIQUE pairs of elements in an array;

// let colors= ['red', 'orange', 'yellow', 'green']

//  for (let i = 0; i < colors.length; i++) {
//     let color1= colors[i];
//     for (let j = i + 1; j < colors.length; j++) {
//         let color2= colors[j]
//         console.log(color1, color2)
//     }
//  }


// //--Function to determine largest value in 2D array matrix (matrix = same amount of values in every array, perfect grid);

// function maxInMatrix(matrix) {
//     let largestVal = 0

//     for (let i = 0; i < matrix.length; i++) {

//         for (let j = 0; j < matrix[i].length; j++) {

//             if (matrix[i][j] > largestVal) {
//                 largestVal = matrix[i][j]
//             }
//         }
//     }
//     return largestVal
// }
// matrix = [[11, 2, -99],
//           [20, 19, 10],
//           [47, 72, 56]]
// console.log(maxInMatrix(matrix))


// //--Function to determine maximum value in each column of a 2D array;
// function maxColumn(matrix) {
//     let row = matrix.length    // nums going across
//     let col = matrix[0].length  // nums going down
//     let array = []    // def new empty array for max values


//     for (let i = 0; i < row; i++) { // first iteration
//         let maxVal = matrix[0][i]

//         for (let j = 0; j < col; j += 1) { // second iteration

//             if (matrix[j][i] > maxVal) { // if values in array are largest
//                 maxVal = matrix[j][i]  // they become maximum value (maxVal)
//             }
//         }
//         array.push(maxVal)   // push max val from each column into empty array
//     }


//     return array
// }
// matrix = [[5, 9, 21],
// [9, 19, 6],
// [12, 14, 15]]

// console.log(maxColumn(matrix))
 
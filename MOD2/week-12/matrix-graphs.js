// Adjacency List - represents relationships as an object data type
const adjacencyList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}
// Node 1 has two neighbor nodes [2, 5]

// Matrix - represents relationships as a two-dimensional (2-D) array data type
const matrix = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
// The [0,0] node has three neighbor nodes [ [0,1], [1,0], [1,1] ],
// if we are counting diagonals as valid neighbors

// function getEightNeighbors(node, matrix) {
  // Create an array to hold the valid neighbors
  // UP:
  // Identify the node above the current node, if it exists
  // Push that node into the new array
  // DOWN:
  // Identify the node below the current node, if it exists
  // Push that node into the new array
  // LEFT:
  // Identify the node to the left of the current node, if it exists
  // Push that node into the new array
  // RIGHT:
  // Identify the node to the right of the current node, if it exists
  // Push that node into the new array
  // Return the neighbors array

function getNeighbors(node, matrix) {

  let [row, column] = node

  let rowLimit = matrix.length - 1;
  let columnLimit = matrix[0].length - 1;
  let neighbors = []


  for (let x = Math.max(0, row - 1); x <= Math.min(row + 1, rowLimit); x++) {
    for (let y = Math.max(0, column - 1); y <= Math.min(column + 1, columnLimit); y++)  {
        // console.log(x, y)
        // console.log(`indiicies of rows ${x}:`, [x, y])

      if ((x !== row || y !== column)) {
        if((x === column) &&  (y === column + 1 || y === column - 1) || (y === row && (x === row + 1 || x === row - 1))) {
        // console.log('x: ',x ,' y: ', y);
        // console.log(matrix[x][y]);
        neighbors.push([x ,y])
       }
      }
    }
  }
return neighbors
 }


console.log(getNeighbors([2, 2], matrix)) // returns [ [1,2], [3,2], [1,2], [3,2] ]
console.log(getNeighbors([0, 0], matrix)) // returns [ [1,0], [0,1] ]
console.log(getNeighbors([2, 0], matrix)) // returns [ [1,0], [3,0], [2,1] ]

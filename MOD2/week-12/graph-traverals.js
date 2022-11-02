// --Simple Breath-First Traversal

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst (start) {
  let queue = [start]
  let visited = new Set()

  visited.add(start)

  while (queue.length > 0) {
    let curr = queue.shift()

    console.log(curr)

    adjList[curr]
      .filter(n => !visited.has(n))
      .forEach(n => {
        visited.add(n)
        console.log(visited)
        queue.push(n)
      })
  }
}

console.log('First Test:')
console.log(printBreadthFirst(3)) // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log('Second Test:')
console.log(printBreadthFirst(6)) // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log('Third Test:')
console.log(printBreadthFirst(4)) // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  4, 3, 5, 6, 2, 1




// --Simple Depth-First Traversal

function printDepthFirst (start) {
  let stack = [start]
  let visited = new Set()

  visited.add(start)

  while (stack.length > 0) {
    let curr = stack.pop()
    let value = adjList[curr]

    console.log(curr)

    value
      .filter(n => !visited.has(n))
      .forEach(n => {
        visited.add(n)
        stack.push(n)
      })
  }
}

console.log('First Test:')
console.log(printDepthFirst(3)) // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
console.log('Second Test:')
console.log(printDepthFirst(6)) // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
console.log('Third Test:')
console.log(printDepthFirst(4)) // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3




// --Simple Breadth-First Search

function breadthFirstSearch (start, end) {
  let queue = [start]
  let visited = new Set()

  visited.add(start)

  while (queue.length > 0) {
    let curr = queue.shift()

    adjList[curr]
      .filter(n => !visited.has(n))
      .forEach(n => {
        visited.add(n)
        queue.push(n)
      })
  }
  if (visited.has(start) && visited.has(end)) {
    return true
  } else {
    return false
  }
}

console.log('First Test:')
console.log(breadthFirstSearch(1, 3)) // -> true
console.log('Second Test:')
console.log(breadthFirstSearch(4, 1)) // -> true
console.log('Third Test:')
console.log(breadthFirstSearch(6, 1)) // -> false

// --A shortest path

function aShortestPath(start, end) {

let path = [ start ]
   let queue = [ path ]
   let visited = new Set()
   visited.add(start)

   while (queue.length > 0) {
      let currPath = queue.shift()
      let currNode = currPath[currPath.length - 1]

      if (currNode === end) return currPath

      adjList[currNode]
      .filter(n => !visited.has(n))
      .forEach(n => {
         visited.add(n)
         let copy = [...currPath]
         copy.push(n)
         queue.push(copy)
      })
   }
 }

console.log('First Test:')
console.log(aShortestPath(1, 3)) // -> [1, 2, 3]
console.log('Second Test:')
console.log(aShortestPath(5, 2)) // -> [5, 2]




// --Degrees of Separation

function degreesOfSeparation (start, end) {
  let path = [start]
  let queue = [path]
  let visited = new Set()
  visited.add(start)

  while (queue.length > 0) {
    let currPath = queue.shift()
    let currNode = currPath[currPath.length - 1]

    if (currNode === end) return currPath.length - 1

    adjList[currNode]
      .filter(n => !visited.has(n))
      .forEach(n => {
        visited.add(n)
        let copy = [...currPath]
        copy.push(n)
        queue.push(copy)
      })
  }
  return false
}

console.log('First Test:')
console.log(degreesOfSeparation(1, 3)) // -> 2
console.log('Second Test:')
console.log(degreesOfSeparation(5, 2)) // -> 1
console.log('Third Test:')
console.log(degreesOfSeparation(6, 1)) // -> false

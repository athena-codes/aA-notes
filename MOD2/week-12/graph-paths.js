const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    k:[]
}

// Depth First Solution: (recursive)

const hasPathDepthFirst = (graph, src, dst) => {
    // base case
    if (src === dst) return true

    // traverse neighbors of the graph from source
   for (let neighbor of graph[src]) {
     // if our neighbor is connected to dst, then we know a path from src to dst exists
     // since src is next to neighbor
      if (hasPathDepthFirst(graph, neighbor, dst) === true) {
        return true
      }
   }
   return false
}

console.log(hasPathDepthFirst(graph, 'f', 'k'))  // -> true, since f is neihbors w/ i and i connects to k
console.log(hasPathDepthFirst(graph, 'f', 'h'))  // -> true, since f is neighbors w/ g and g connects to h
console.log(hasPathDepthFirst(graph, 'k', 'h'))  // -> false, since k and h are not connected and have no neighbors


// Breadth First Solution: (iterative)


const hasPathBreadthFirst = (graph, src, dst) => {
  // initialize queue with source node
  const queue = [ src ]

  while (queue.length > 0) {
     let currNode = queue.shift()

      if (currNode === dst) return true

      // whatever node just left queue, consider those node's neighbors and add them to be visited next
      for (let neighbor of graph[currNode]) {
         queue.push(neighbor)
      }
  }
  return false
}

console.log(hasPathBreadthFirst(graph, 'f', 'k')) // -> true, since f is neihbors w/ i and i connects to k
console.log(hasPathBreadthFirst(graph, 'f', 'h')) // -> true, since f is neighbors w/ g and g connects to h
console.log(hasPathBreadthFirst(graph, 'k', 'h')) // -> false, since k and h are not connected and have no neighbors






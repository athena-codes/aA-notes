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



// Undirected Path

const edges = [
   ['i', 'j'],
   ['k', 'i'],
   ['m', 'k'],
   ['k', 'l'],
   ['o', 'n']
]


const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)

  return hasPath(graph, nodeA, nodeB, new Set())
}


const hasPath = (graph, src, dst, visited) => {
  // base case
  if (src === dst) return true
  // use set to account for cycles + infinite loop
  if (visited.has(src)) return false
  // if not false, then add to set
  visited.add(src)
  // traverse neighbors of the graph from source
  for (let neighbor of graph[src]) {
    // if our neighbor is connected to dst, then we know a path from src to dst exists
    // since src is next to neighbor
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}


const buildGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [a, b] = edge

    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
     graph[a].push(b)     // undirected graph, so adjacency list must be symmetric
     graph[b].push(a)    // if a is in b's neighbors, b should be in a's neighbors
  }
  return graph
}

console.log(undirectedPath(edges, 'j', 'm'))  // -> true



const connectedComponentsCount = (graph) => {
  

}

// Graphs

// --Adjacency Lists

const graph1 = {
    T: ["v"],
    U: ["V"],
    V: []
}

/* Visualization:
   T  U
   |  /
    V
*/

const graph2 = {
    X: ["Y"],
    Y: ["Z"],
    Z: ["X"]
}


const graph3 = {
    A: ["B", "C", "E"],
    B: [],
    C: ["B", "D"],
    D: [],
    E: ["A"],
    F: ["E"]
}

const undirectionalGraph = {
    1: [2, 5],
    2: [1, 3 ,5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

/* Graph Traversals;

-Breadth First:
  1. create a queue, enqueue first node
  2. create a set to store visited nodes, add first node (ensures we dont hit infiniite loop)
  3. while queue is not empty, repeat steps 4-6
  4. dequeue first node
  5. DO THE THING on each node (consolelog, add to array, make a string etc..)
  6. for each unvisited neighbor, add it to the visited nodes + back of queue, add our current to visited Set

 -Depth First:
  1. create a stack, push first node
  2. create a set to store visited nodes, add first node
  3. while stack is not empty, repeat steps 4-6
  4. pop first node off of stack
  5. DO THE THING
  6. for each unvisited neighbor, we add it to the visited nodes + top of the stack
*/



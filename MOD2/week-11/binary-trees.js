// Representing a Binary Tree with Node Instances

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Constructing tree

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Visual Representation of Tree:
/*          a
          /   \
         b     c
       /  \     \
      d   e      f
                      */


// Recursive linked list search:

function linkedListSearch(linkedList, target) {
    // Base case: empty list
    if (linkedList.head === null) return false;

    // Check if the current node's value matches the target
    if (linkedList.head.value === target) return true;

    // If not, recursively search the rest of the list
    return linkedListSearch(linkedList.head.next);
}



// Recursive binary tree search:

function binaryTreeSearch(root, target) {

    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root.value === target) return true;

    // Otherwise, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right, target);
}

// Recursive binary tree sum:

function binaryTreeSum(root) {

    // Check the base case
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}


// Breadth-first Traversal: (queue each node and its children then dequeue + print and repeat process)

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue (value) {
    const node = new TreeNode(value)

    if (this.size === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
    return this
  }

  dequeue () {

    if (this.size === 0) {
       return
    }
    if (this.head === this.tail) {
        this.tail = null
    }
    const first = this.head
    this.head = this.head.next
    this.size--
    return first
  }

  peek () {
    return this.head.value
  }

  size () {
    return this.size
  }
}

function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = []
    queue.push(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
    return queue
}

// console.log(breadthFirstTraversal(a))
/* Prints =>
[
  TreeNode {
    val: 'a',
    left: TreeNode { val: 'b', left: [TreeNode], right: [TreeNode] },
    right: TreeNode { val: 'c', left: null, right: [TreeNode] }
  }
] */


// Depth-First Traversal:

function depthFirstTraversal(root) {

    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        console.log(node.val);

        // Put all of the node's children on the top of the stack
        stack.push(node.right);
        stack.push(node.left);
    }
}

// console.log(depthFirstTraversal(a))

let arr = [0, 1, 2, 3, 4, 5];

[arr[1], arr[3]] = [arr[3], arr[1]];

console.log(arr)



    // Breadth First Traversal - Iterative
  const breadthFirstTraversal = () => {

     if (!this.root) {
      return
     }

    let queue = []
    queue.push(this.root)  // put starting node in queue

    while (queue.length > 0) {   // while queue is not empty
        let current = queue.shift() // dequeue a node
        console.log(current.val)   // print that node

        if (current.left) {  // search left printing values
          queue.push(current.left)
        }
        if (current.right) {  // then search left printing values
          queue.push(current.right)
        }
    }
    return queue  // return queue that has all values printed in breadth first order
}

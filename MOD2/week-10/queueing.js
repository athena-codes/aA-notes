// class Queue {
//   constructor () {
//     this.data = []
//   }

//   enqueue (value) {
//     this.data.push(value)
//   }

//   dequeue () {
//     return this.data.shift()
//   }
// }

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// queue.dequeue() // 1
// queue.dequeue() // 2

// queue.enqueue(4)

// queue.dequeue() // 3
// queue.dequeue()

/* Calling shift(), which removes the first item from the array,
 requires moving over every other element to the left by one, one chunk at a time.
  This makes dequeue() an O(n) operation and very inefficient for large values of n.*/


  // Implementing a queue with a linked list

  const LinkedList = require('./linked-lists.js')

class Queue {
  constructor () {
    const ll =  new LinkedList()
    this.linkedList = ll
}
  enqueue (value) {
    this.linkedList.addToTail(value)
  }
  dequeue () {
    const value = this.linkedList.head.value
    this.linkedList.removeFromHead()

    return value
  }
}

/* According to big-O analysis, this linked list implementation of dequeue() is O(1),
which is far superior to the array implementation's O(n)*/


// Tetsing performance of linked list:

q = new Queue()
n = 100000

enqueueStartTime = Date.now()
for (let i = 0; i < n; i++) {
  q.enqueue(i)
}
enqueueEndTime = Date.now()

dequeueStartTime = Date.now()
for (let i = 0; i < n; i++) {
  q.dequeue()
}
dequeueEndTime = Date.now()

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`)
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`)

// Output:
/*
  Enqueue time: 22703ms
  Dequeue time: 6ms
*/

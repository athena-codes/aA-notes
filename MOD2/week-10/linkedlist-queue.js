class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedListQueue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue (ele) {
    const node = new Node(ele)

    if (this.size === 0) {   // if list is empty
      this.head = node    // head and tail point to new node
      this.tail = node
    } else {
      this.tail.next = node  // add node to back of queue
      this.tail = node
    }
    this.size++  // increase size of queue
    return this  // return updated list
  }

  dequeue () {

    if (this.length === 0) {  // if queue is empty return
       return
    }
    if (this.head === this.tail) {  // if head and tail point to same value
        this.tail = null     // tail dequeued, list now empty
    }
    const first = this.head  // def var for removing first ele in line
    this.head = this.head.next   // assign head to next value, implicity removing current head
    this.size--   // decrement size
    return first   // return first ele in queue that was removed
  }

  peek () {
    return this.head.value   // return first ele in q which is head
  }

  size () {
    return this.size
  }
}


const llq = new LinkedListQueue()

llq.enqueue(1)
llq.enqueue(2)
llq.enqueue(3)
llq.enqueue(4) // adds elements in order
console.log(llq.size) // => 4
console.log(llq)
llq.dequeue() // removes first ele
console.log(llq)
console.log(llq.peek()) // => 2 is now first ele

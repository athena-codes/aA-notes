// --Sets
// cannot have duplicate values
// unordered, has no indexes
// can check from an element in constant time

const set = new Set([1, 2, 3, 4, 5])

// console.log(set.has(1)) // => true, O(1) time
// ^ returns boolean if set coontains value

console.log(set.add(6)) // adds element to end of a set

set.delete(1)  // deleted input value

console.log(set)

set.add(2)  // nothing happens b/c a set cannot have duplicate values
console.log(set)


// class Node {
//   constructor (val) {
//     this.next = null
//     this.value = val
//   }
// }

// class Queue {
//   constructor () {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   enqueue (val) {
//     let newNode = new SinglyLinkedNode(val)
//     if (!this.length) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.length++
//     return this.length
//   }

//   dequeue () {
//     let removed = this.head
//     if (!this.length) return null
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.head = removed.next
//     }
//     this.length--
//     return removed.value
//   }
// }

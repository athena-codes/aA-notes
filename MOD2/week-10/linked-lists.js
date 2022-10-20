class Node {
  constructor (val) {
    this.value = val
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }
  addToHead (val) {
    this.length++
    const node = new Node(val)
    node.next = this.head
    this.head = node
  }
  addToTail (val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }
  removeFromHead () {
    if (this.head) this.head = this.head.next

    if (this.head === null) this.tail = null
  }
  printList() {
    let current = this.head

    while (current.next !== null) {
      console.log(current.value)
      current = current.next
    }
    console.log(current.value)
  }
}
    // Recursive print list;
    //  printList(head) {
  //      if (head === null) {
  //       return
  //      }
  //        console.log(head.value)
  //         printList(this.head.next)
  //     }
  // }
// Time Complexity;
// search: O(1)
// addint new nodes: O(n)

function listArray(ll) {
  let arr = []

  if (ll.head === null) return []

  let current = ll.head
  while(current.next !== null) {
    arr.push(current.value)
    current = current.next
  }
  arr.push(current.value)
  return arr
}
// Time complexity; O(n) - iterating every node once
// Space complexity; O(n)

function sumOfList(ll) {
   let sum = 0
   let current = ll.head

  while (current.next !== null) {
    sum += current.value
    current = current.next
  }
  sum += current.value
  return sum
}
// Time complexity; O(n) - iterating every node once
// Space complexity; O(1) - only var needed to maintain are current + sum

// function recursiveSumOfList(head) {

//   if (head === null) {
//     return 0
//   }
//   return head.value + recursiveSumOfList(head.next)

// }

const ll = new LinkedList()

ll.addToHead(88)
ll.addToHead(45)
ll.addToHead(465)
ll.addToTail(70)
ll.printList()

console.log(listArray(ll))
console.log(sumOfList(ll))
// console.log(recursiveSumOfList(ll.head))

console.log(ll)



module.exports = LinkedList

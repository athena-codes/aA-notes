// Practicing creating/initizalizing linked lists/methods;

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.header = null
    this.tail = null
    this.size = 0
  }
  prepend (data) {
    const n = new Node(data)
    if (this.size === 0) {
      this.header = n
      this.tail = n
    } else {
      n.next = this.header
      this.header = n
    }
    this.size++
  }
  append (data) {
    const n = new Node(data)
    if (this.size === 0) {
      this.header = n
      this.tail = n
    } else {
      const temp = this.tail
      this.tail = n
      temp.next = this.tail
    }
    this.size++
  }
  printList () {
    let data = ''
    let current = this.header
    while (current != null) {
      data = data + current.data + ' '
      current = current.next
    }
    return data
  }
  removeFirst () {
    if (this.size === 0) {
      return null
    }
    let data = this.header.data
    if (this.size === 1) {
      this.header = null
      this.tail = null
    } else {
      this.header = this.header.next
      this.size--
      return data
    }
  }
  removeLast () {
    if (this.size === 0) {
      return null
    }
    let data = this.tail.data
    if (this.size === 1) {
      this.header = null
      this.tail = null
    } else {
      let current = this.header
      while (current.next.next != null) {
        current = current.next
        current.next = null
        this.tail = current
      }
      this.size--
      return data
    }
  }
  insertAt(pos, data) {
    if(pos < 0 || pos > this.size) {
        return
    }
    if (pos === 0) {
        this.prepend(data)
    } else if (pos === this.size) {
        this.append(data)
    } else {
        const n = new Node(data)
        let prev = null
        let current = this.header
        let counter = 0
        while(counter < pos) {
           prev = current
           counter++
        }
        n.next = current
        prev.next = n
        this.size++
    }
  }
  removeAt(pos) {
    if (pos < 0 || pos >= this.size) {
        return null
    } if (pos === 0) {
        return this.removeFirst()
    } else if (pos === this.size - 1) {
        return this.removeLast()
    } else {
      let prev = null
      let current = this.header
      let counter = 0
      while (counter < pos) {
        prev = current
        current = current.next
        counter++
      }
      prev.next = current.next
      this.size--
      return current.data
    }
  }
}

// // Prepending Data:
const newList = new LinkedList()
newList.prepend(1)
console.log(newList)
// // Output:
 /* LinkedList {
//   header: Node { data: 1, next: null },
//   tail: Node { data: 1, next: null },
//   size: 1
// } => added 1 to head */

// // Appending Data:
newList.append(2)
console.log(newList)
// // Output:
// /*
// LinkedList {
//   header: Node { data: 1, next: Node { data: 2, next: null } },
//   tail: Node { data: 2, next: null },
//   size: 2
// } => added 2 to tail */

// // Printing linked list:
console.log(newList.printList())
// // Output: "1 2"

// // Removing First Node:
newList.removeFirst()
console.log(newList)
// // Output:
// /*
// LinkedList {
//   header: Node { data: 2, next: null },
//   tail: Node { data: 2, next: null },
//   size: 1
// } => removed 1 */

// // Removing Last Node:
newList.removeLast()
console.log(newList)
// Output:
/*
LinkedList { header: null, tail: null, size: 1 } => removed 2 */


// Inserting at specified position:
const newList2 = new LinkedList()
newList2.prepend(1)
newList2.append(2)
newList2.insertAt(1, 50)
console.log(newList2)

// Output:
/* LinkedList {
  header: <ref *1> Node {
    data: 1,
    next: Node { data: 50, next: [Circular *1] }
  },
  tail: Node { data: 2, next: null },
  size: 3
} => 50 inserted at pos. 1 */

// Removing at a specified position:
newList2.removeAt(1)
console.log(newList2)
// Output:
/*
LinkedList {
  header: <ref *1> Node { data: 1, next: [Circular *1] },
  tail: Node { data: 2, next: null },
  size: 2
}   => 50 removed from list */

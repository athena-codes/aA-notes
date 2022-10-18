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
}

// Ordered data, but not in a contigious block of memory (non-contigiously)
// LL has no indicies and is not possible  to look up nodes in constant time
// In order to find a node we must iterare over each item in list


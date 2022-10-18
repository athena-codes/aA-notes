class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    addToHead(val) {
        this.length++
        const node = new Node(val)
        node.next = this.head
        this.head = node
    }
    addToTail(val) {
        const node = new Node(val)

        if(!this.head) {
            this.head = node
     } else {
        let current = this.head

        while(current.next) {
            current = current.next
        }
        current.next = node
     }
     this.length++
   }
}
// Time Complexity;
// search: O(1)
// addint new nodes: O(n)

const ll = new LinkedList()

ll.addToHead(88)
ll.addToHead(45)
ll.addToHead(465)
ll.addToTail(70)

console.log(ll)

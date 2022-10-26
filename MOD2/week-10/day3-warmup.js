//Boilerplate Code
class Queue {
    constructor(){
       this.elements = []
       this.size = 0
    }

    enqueue(ele){
       this.elements.push(ele)
       this.size++
    }

    dequeue(){
       if (this.size === 0) {
         return
       }
       this.size--
       return this.elements.shift()
    }

    peek(){
       if (this.size === 0) {
        return
       }
       return this.elements[0]
    }

    size(){
       return this.elements.length
    }

    printQueue() {
    let list = ""
    for(let i = 0; i < this.elements.length; i++) {
        list += this.elements[i] + " "
    }
    return list
  }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4) // adds elements in order
console.log(q.printQueue()) // => 1, 2, 3, 4
console.log(q.size)  // => 4
console.log(q)
q.dequeue()   // removes first ele
console.log(q)
console.log(q.peek())  // => 2 is now first ele

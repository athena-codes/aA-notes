// Create a class which will act as a Stack data structure.

// It should follow the Last-In-First-Out (LIFO) rule.✅
// Use an array as the data layer of the stack.✅
// It should have a push method to add items to the stack.✅
// It should have a pop method to remove items from the stack.✅
// It should have a peek method to view the item on top of the stack, but not remove it.✅
// It should have a printAll method, that will log each item in the stack to the console.✅

class Stack {
  constructor(data = []) {
    this.data = data
    this.length = 0
  }
  push(newFrame) {
    this.data.push(newFrame)
    this.length++
  }
  pop() {
    if(!this.data){
        return
    }
    this.length--
    return this.data.pop()
  }
  peek() {
    return this.data[this.data.length - 1]
  }
  printAll() {
    let dataStr = ''
    for (let i = 0; i < this.data.length; i++) {
      dataStr += this.data[i] + ' '
    }
    return dataStr
//  this.data.forEach((element) => {
//     console.log(element)
//   })
//  }
  }
}

const callStack = new Stack()
callStack.push(1)
callStack.push(2)
callStack.push(3)
console.log(callStack)  // => Stack { data: [ 1, 2, 3 ] }

callStack.pop()
console.log(callStack) // => Stack { data: [ 1, 2 ] }

console.log(callStack.peek())  // => 2

console.log(callStack.printAll()) // => '1 2'

// Lexical Scope (static scope)

// let a = 'global';
// function outer() {
//     let b = 'outer';
//     function inner() {
//         let c = 'inner'
//         console.log(c);   // prints 'inner'
//         console.log(b);   // prints 'outer'
//         console.log(a);   // prints 'global'
//     }
//     console.log(a);     // prints 'global'
//     console.log(b);     // prints 'outer'
//     inner();
// }
// outer();
// console.log(a);         // prints 'global'




// Closure Examples:
// - A closure is when an inner function uses or changes variables in an outer function



function person() {
    let name = 'Peter';

    return function displayName() {  // the closure - can access the variable of
                                    // its outer function 'person' even after that function has returned
        console.log(name);  // function returns inner function display name
    };
}
let peter = person();  // stores inner function is variable
peter(); // prints 'Peter'



// 2.

function getCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}
let count = getCounter();    // storing the anonymous inner function returned by
                             //' getCounter' function into the 'count' variable
//  count function is now a closure, it can access the counter variable of getCounter
// function even after getCounter() has returned.

console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2


// 3.

let appleTree = function() {
    let aVariable = "apple"

    let tree = function() {
        return aVariable
        // inner function has accessa to outer function (scope chaining)
    }
    return tree()  // tree() is closure
}

console.log(appleTree())


// 4.

let appleTree2 = function() {
    let tree = {type: "apple", grown: false}

     let growTree  = function() {
        tree.grown = true  // closure changes tree object
     }
     growTree()
     return tree
}

console.log(appleTree2())

// 5.

function treeMaker() {
  let trees = []
  function addTree(tree) {
    trees.push(tree)
    return trees
  }
  return addTree // can still access variables of a returned function bc of private state
}

let treeFunc = treeMaker() // returns a function
console.log(treeFunc('Pine')) // returns ['Pine']


// 6.

function createCounter() {
    let count = 0

    return function() {  // function responsible for incrementing and returing count
        count++
        return count
    }
}

let counter1 = createCounter()  // now, count can be stored in multiple variables
console.log(counter1())  // => 1
console.log(counter1())  // => 2

let counter2 = createCounter() // second variable does not share state, it has seperate count
console.log(counter2())  // => 1

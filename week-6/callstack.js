
// Callstack
// - underlying structure in JS that tacks execution of function calls
// - new items pushed to top, only top item can be popped
// - when items are placed on CS they are refered to as stack frames


function foo() {
    console.log("a")
    bar()
    console.log("e")
}

function bar()  {
    console.log("b")
    baz()
    console.log("d")
}

function baz() {
    console.log("c")
}

foo()

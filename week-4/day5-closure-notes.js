
// Closures
// inner function can access the lexical scope of outer function

function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(5))
console.log(add10(10))

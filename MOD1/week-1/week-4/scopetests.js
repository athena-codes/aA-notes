// function example() {
//     // ...
//     if (true) {
//     const hi= "hi"
//     }
//     // ...
// }

// console.log(example(hi))

// const a = { b: "c" };

// a.b = "hi"

// console.log(a)

function example(arg) {
    var longEnough = false;
    if (arg.length >= 5) {
        var longEnough = true;
    }
    return longEnough;
}

console.log(example("testtesttest"));

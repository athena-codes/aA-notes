
// Set timeout method

// setTimeout(function () {
//     console.log("time is up!");
// }, 1500);                      // function executes after 1.5 seconds


// console.log("start");
// setTimeout(function () {
//     console.log("time is up!");   // executes last due to timeout of 1.5s
// }, 1500);
// console.log("end");



// setTimeout(function () {
//     console.log("last");     // time for timeout is not exact, rather a min amt of time to elapse
// }, 3000);

// setTimeout(function () {
//     console.log("first");
// }, 1000);



// console.log("first");

// setTimeout(function () {
//     console.log("second");   // prints second last even tho timeout is set to 0s bc actual execution may exceed 0
// }, 0);

// console.log("third");


// function foo() {
//     console.log("food");
// }

// setTimeout(foo, 2000);
// console.log("drink");


// function foo(food1, food2) {
//     console.log(food1 + " for breakfast");
//     console.log(food2 + " for lunch");
// }
// setTimeout(foo, 2000, "pancakes", "couscous");

// Prints:
//pancakes for breakfast  then,
//couscous for lunch// after abt 2s


// function foo() {
//     console.log("food");
// }

// const val = setTimeout(foo, 2000);
// console.log(val);   // returns special timeout object or timeout id in console


function foo(a, b) {
    console.log("time is up!")
    console.log(`${a} ${b}`)
}

const res = setTimeout(foo, 1000, 'potato', 'tomato')
clearTimeout(res)









// setInterval

// function foo(food1, food2) {
//     console.log(food1 + " and " + food2 + "!");
// }

// setInterval(foo, 1000, "pancakes", "couscous")

// clearInterval(1)  => using setTimeout id interval is cleared

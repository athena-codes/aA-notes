// --Using console.time()

// // 1. call console.time using unique str arg
// console.time("time for loop")

// for(let i = 0; i < 100000; i++) {
//     let double = i * 2
// }
// // 2. call console.timeEndf with same unique str
// console.timeEnd("time for loop")  // prints: time for loop: 70.481ms


// console.time("timeout")

// setTimeout(() => {
//     console.timeEnd("timeout")
// }, 5000)      // prints: timeout: 5.001s

// console.time("Timer 1")
// console.timeLog("Timer 1")  // Timer 1: 0.099ms
// console.timeEnd("Timer 1")  // Timer 1: 7.342ms


// let arr = [];
// function addNums() {
//     for (let n = 0 ; n <= 1000000000000 ; n++) {
//         arr.push(n);
//     }
// }

// console.time("addNums");
// addNums(100);
// console.timeEnd("addNums");




// --Using Date.now()
// Timestamp: # of ms that have passed since Jan 1, 1970 at 00:00:00

// log = console.log
// let timestamp1 = Date.now()  // class method, static method
// log(timestamp1)


// let today = new Date()
// // current computer time ^
// let timestamp2 = today.valueOf()
// // extracts time stamp ^
// log(timestamp2)
// log(today)


// --Visualizing Peformance

function double() {
    for(let i = 0; i < 100000; i++) {
      let double = i * 2
 }
}


let increment = 1000000
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  double(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}
/* prints:
2
1
0
0
1
0
0
0
0
0   */

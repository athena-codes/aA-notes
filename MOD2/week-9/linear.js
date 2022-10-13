// Linear growth

function addNums(n) {
  total = 0;

  for (let i = 1 ; i <= n ; i++) {
    total += i;  // critical operation (core part)
  }

  return total;
}

// O(n) // time complexity analysis using Big O notation


console.time("addNums")
addNums(1000)
console.timeEnd("addNums") // prints addNus: 1.894ms


startTime = Date.now();
addNums(5);
endTime = Date.now();

startTime2 = Date.now();
addNums(10);
endTime2 = Date.now();

startTime3 = Date.now();
addNums(15);
endTime3 = Date.now();

console.log(`${endTime - startTime}`);
console.log(`${endTime2 - startTime2}`);
console.log(`${endTime3 - startTime3}`);

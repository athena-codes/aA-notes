// Quadratic Growth


let arr = [];
function addNums() {
    for (let n = 0 ; n <= 1000000000000 ; n++) {
        arr.push(n);
    }
}

function addManyNums(n) {

  let total = 0;

  for (let i = 0 ; i < n ; i++) {
    total += addNums(i);
  }

  return total;
}
// calls the addNums() function n times ^

startTime = Date.now();
addManyNums(10);
endTime = Date.now();

console.log(`${endTime  - startTime}`);
// Time complexity analysis;
O(n^2)

/* addNums is O(n), this results in a function that does n things n times, for an
 overall time complexity of n * n, or O(n2). This is known as quadratic growth. */

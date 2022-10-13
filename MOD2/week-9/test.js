function printLettersNTimes(n) {

  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0 ; i < letters.length ; i++) {  // outer loop only runs 26 times
     console.log(letters[i]);
    for (let j = 0 ; j < n ; j++) {  // the inner loop runs n times
      console.log(letters[j]);
    }  // n = 10, the function calls 26 * n = 260 prints
  }
}
//O(n)


let increment = 100000
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now()
  printLettersNTimes(n)
  endTime = Date.now()

  console.log(`${endTime - startTime}`)
}

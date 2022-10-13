// Loop complexity

function printPairSums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }

  }
}
O(n^2)


function printTripleSums(n) {

  for (let i = 0 ; i < n ; i++) {  // O(n)

    for (let j = 0 ; j < n ; j++) {  // O(n^2)

      for (let k = 0 ; k < n ; k++) {  // O(n^3)
        console.log(`${i} + ${j} + ${k} = ${i + j + k}`);
      }
    }
  }
}
O(n^3) // AKA 'cubic growth' or generalized as polynomial growth (not as common)



function printLettersNTimes(n) {

  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0 ; i < letters.length ; i++) {  // outer loop only runs 26 times
     console.log(letters[i]);
    for (let j = 0 ; j < n ; j++) {  // the inner loop runs n times
      console.log(letters[j]);
    }  // n = 10, the function calls 26 * n = 260 prints
  }
}
O(n)
// this results in a time complexity of O(26n) which reduces to O(n) since n represents lenght of input



function printNumbersTwice(n) {

  for (let i = 0 ; i < n ; i++) {  //  two adjacent loops. since not nested, each loop is only executed once.
    console.log(i);
  }

  for (let j = 0 ; j < n ; j++) {
    console.log(j);
  }
}
O(n)
// the former is O(n2) while the latter is O(2n), which reduces to O(n)



function printPairSumsThenPrintNums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {       // has two nested for-loops followed by a lone for-loop
      console.log(`${i} + ${j} = ${i + j}`);  // the nested loops have a time complexity of O(n2)
    }
  }

  for (let k = 0 ; k < n ; k++) { // the lone loop is O(n)
    console.log(k);
  }
}
O(n^2)
// Adding these together results in a composite time complexity of O(n2 + n)
// ignore '+ n' since we are only concerned w/ most signifigant factor
// complexity reduces to O(n^2)

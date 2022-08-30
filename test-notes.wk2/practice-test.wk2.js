// function getAverage(nums) {
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         sum += num
//     }

//     return sum / nums.length
// }



// function highestAverage(numsList) {
//     let index = numsList[0]       // def index var- starting at index 0 of array

//     for (let i = 0; i < numsList.length; i++) {   // iterate thru array
//         let num = numsList[i]                   // def var array at index of each iteration (i)
//         let highestAvg = getAverage(index)   // def var for highest avg, calling avg function to evaluate for each index

//         if (getAverage(num) > highestAvg) {  // if the average of a number is highest
//             index = num                    // let that number equate to the index
//         }
//     }
//     return numsList.indexOf(index)   // return index of num with highestAvg
// }




// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

// let score = 0;

// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;

// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;

// console.log("You have scored " + score + "/7 points.");

function evenNumbersBelow(num) {
    let arr = [];
    for (let i = 0; i < num; i += 2) {
        arr.push(i);
    }
    return arr;
}

// Expected return values
console.log(evenNumbersBelow(0)); // []
console.log(evenNumbersBelow(6)); // [0, 2, 4]
console.log(evenNumbersBelow(7)); // [0, 2, 4, 6]
console.log(evenNumbersBelow(8)); // [0, 2, 4, 6]

/* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
let score = 0;
let arr1= [0, 2, 4]
let arr2= [0, 2, 4, 6]
let arr3= [0, 2, 4, 6]
let arr4= []

if (evenNumbersBelow(0) == arr4) score++;
if (evenNumbersBelow(6) == arr1) score++;
if (evenNumbersBelow(7) == arr2) score++;
if (evenNumbersBelow(8) == arr3) score++;

console.log("You have scored " + score + "/4 points.");

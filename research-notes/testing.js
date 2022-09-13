
// let notAnArray = 'athena'
// let newArray = Array.from(notAnArray)

// console.log(newArray)

// // hasThreeVowels using .reduce()

// let hasThreeVowels = function (string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = vowels.reduce((acc, vowel) => {  //
//         if (string.includes(vowel)) {
//             acc++
//             console.log(acc)
//         }
//         return acc
//         console.log(acc)
//     }, 0)
//     return count >= 3
// }

// let func = function (arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         if (cb(el, i)) {
//             return true;
//         }
//     }
//     return false;
// }

// let res1 = func(['apple', 'dog', 'pear'], function (el) {
//     return el.length > 3;
// });

// let res2 = func(['apple', 'dog', 'food', 'cat'], function (el, idx) {
//     return el.length === idx;
// });

// console.log(res1, res2);


let reverse3 = str => str.split("").reverse().join("");

console.log(reverse3("Athena"))


function example(arg) {
    var longEnough = false;
    if (arg.length >= 5) {
        var longEnough = true;
    }
    return longEnough;
}

console.log(example("testtesttest"));

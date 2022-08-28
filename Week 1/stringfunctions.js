// //--Function to return number of vowels in a string

// function countVowels(word) {
//     let vowels = 'aAeEiIoOuU'    // both lower and uppercase included
//     let count = 0

//     for (let i = 0; i <= word.length; i++) {
//         let char = word[i]

//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels("Athena"))


// /*--Function to determine if a substring is part of string
// (returns true or false) */

// function isSubstring(searchString, subString) {
//     let lowerCase = searchString.toLowerCase()
//     let index = subString.toLowerCase()

//     return lowerCase.indexOf(index) !== -1
// }
// console.log(isSubstring("hello my name is Athena", "Athena"))


// //--Function to determine if one string is included in another

// function eitherStringIncluded(sentence, word1, word2) {
//     if (sentence.includes(word1) || sentence.includes(word2)) {
//         return true
//     }
//     return false
// }
// console.log(eitherStringIncluded("hello my name is Athena", "hello", "is"))


// function stringChanger(word, operation) {

//     let newStr = ""

//     if (operation === "unknown") return word

//     if (operation === "capitalize") return word[0].toUpperCase() + word.slice(1)

//     if (operation === "uppercase") return word.toUpperCase()

//     if (operation === "double") return word + word

//     if (operation === "reverse") {

//         for (let i = word.length - 1; i >= 0; i--) {
//             newStr += word[i]
//         }
//     }
//     return newStr
// }

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");

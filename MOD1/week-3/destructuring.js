//--How to access the value of one key-value pair in an object--

// let object = { game: { name: "Boggle", rating: "10" } };

// let {
//     game: { rating }
// } = object;

// console.log(rating);


//--How to destructure an object to access a value of a nested object

// let mario = {
//     name: "mario",
//     profession: "plumber",
//     siblings: {
//         name: "Luigi",
//         fears: "ghosts"
//     }
// };

// let { siblings: { fears } } = mario;
// console.log(fears)

let obj = { color: "Red", fruit: "tomato" };
let { apple } = obj;

console.log(apple)

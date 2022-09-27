// --CALLBACK CHAINING

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
    console.log(firstAnswer + " is up.");
    rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
    console.log(secondAnswer + " is down.");
    rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
    console.log(thirdAnswer + " is left.");
    rl.close();
    console.log('Thanks for your input!')
}

// setTimeout(function() {
//     console.log("Thanks for your input!")
// }, 8000)

function costOfGroceries(groceries) {
    let sum = 0

    for (let i = 0; i < groceries.length; i++) {
        let grocery = groceries[i]

        if (grocery === "butter") {
            sum += 1
        }
        if (grocery === "eggs") {
            sum += 2
        }
        if (grocery === "milk") {
            sum += 3
        }
        if (grocery === "bread") {
            sum += 4
        }
        if (grocery === "cheese") {
            sum += 5
        }
    }
    return sum
}





function mostExpensiveGroceries(groceriesList) {
    let index = groceriesList[0]

    for (let i = 0; i < groceriesList.length; i++) {
        let grocery = groceriesList[i]
        let highestCost = costOfGroceries(index)

        if (costOfGroceries(grocery) > highestCost) {
            index = grocery
        }
    }
    return groceriesList.indexOf(index)
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");

function sum(nums, verbose = false) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (verbose == true) {
            console.log(total + " + " + nums[i] + " = " + (total + nums[i]));
        }
        total += nums[i];
    }
    return total;
}

nums = [1, 2, 3, 4];

console.log(sum(nums));
// 10

// console.log(sum(nums, true));
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10


// Factorial Recursion w/ default parameter

function allFactorials(n, factorials = [1]) {

    if (n > factorials.length) {
        factorials = allFactorials(n - 1, factorials)
    }

    factorials.push(n * factorials[n - 1])

    return factorials;
}

console.log(allFactorials(5));
// [ 1, 1, 2, 6, 24, 120 ]

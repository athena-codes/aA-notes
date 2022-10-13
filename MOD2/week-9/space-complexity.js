// Space complexity, memory usage


// Constant:
function addNums(n) {
    let total = 0;

    for (let i = 1 ; i <= n ; i++) {
        total += i;
    }

    return total;
}
// Space complexity analysis;
O(1)
// Like with time complexity, the space complexity can be expressed using big-O notation
// which ignores constant coefficients, memory required to store 3 variables reduces to
// a space complexity of O(1)


//Linear:
function getNumList(n) {
    let nums = [];

    for (let i = 0 ; i < n ; i++) {
        nums.push(i);
    }

    return nums;
}
O(n)
// This function requires enough memory to store n+2 integers, which reduces to a space complexity of O(n)



//Quadratic:
function getNumPairsList(n) {
    let pairs = [];

    for (let i = 0 ; i < n ; i++) {
        for (let j = 0 ; j < n ; j++) {
            pairs.push([i, j]);
        }
    }

    return pairs;
}
O(n^2)
/* this function has a time complexity of O(n2) from the nested for-loops
you can also deduce that n2 pairs are pushed into the pairs array.
results in a total of 2 * n2 + 2 integers stored, which reduces to a space complexity of O(n^2)
/*

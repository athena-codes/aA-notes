// --Caching Example


function multiply (a, b) {
  let product = 0

  for (i = 0; i < b; i++) {
    product += a
  }

  return product
}
// ** ^ example of a pure/stateless function**
// Time complexity: O(n)

const cache = {}

function multiplyCache (a, b) {
    const key = `${a}x${b}`  // Create a unique key containing the inputs

    if (cache[key] === undefined) {   // If the key does not exist in the cache
        cache[key] = multiply(a, b) // run the calculation and store it in the cache
  }
  return cache[key]   // Return the cached value
}
// O(1) time for subsequent problems

// console.log(multiply(2, 1000000000))
// console.log(multiplyCache(2, 1000000000))


// --Caching sub-problems

// **Pure functions that can be written recursively, a dynamic cache
// is used to calculate any sub-problem in O(1) constant time.**


function recursiveMultiply (a, b) {
  if (b === 1) return a

  return a + recursiveMultiply(a, b - 1)
}
// --Multiplication liek recursive addition, A * B is same as A + (B - 1)

function recursiveMultiplyCached (a, b) {
  if (b === 1) return a

  const key = `${a}x${b}`

  if (cache[key] === undefined) {
    cache[key] = a + recursiveMultiplyCached(a, b - 1)
  }

  return cache[key]
}
// console.log(recursiveMultiplyCached(2, 1000000000))


// --Using cache to create a running log, or memo, of fib() function
const memoCache = {}

function fibMemoPrint (n) {
  console.log(`Running fibMemoPrint(${n})`)
  console.log(memoCache)
  if (n === 1) return 0
  if (n === 2) return 1

  if (memoCache[n] === undefined) {
    memoCache[n] = fibMemoPrint(n - 1) + fibMemoPrint(n - 2)
  }

  return memoCache[n]
}


// console.log(fibMemoPrint(30))


// --Tabulation: instead of recursively creating cache from top -> down you can build a cache
// iteratively from the bottom -> up

const tabCache = {}

function fibTab (n) {
  tabCache[1] = 0
  tabCache[2] = 1

  for (let i = 3; i <= n; i++) {
    tabCache[i] = tabCache[i - 1] + tabCache[i - 2]
  }

  return tabCache[n]
}

console.log(fibTab(30))

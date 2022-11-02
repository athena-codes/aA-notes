/*
-- Bubble sort (adjacent pairs)

--Insertion sort
    - compares current key ele to its predecessor to sort, if it's
    less than then it moves to the front

--Selection Sort (swapping min index)
   -continually looks for min ele and swaps whatever is smaller
   with the prev index (set curr index to 0, then curr index increases
    by one each time)

-- Quick sort (pivot, partition)
   - divide + conquer, pivot can be first, last, median or random
   - takes pivot ele and partitions other eles (whichever ones are less than pivot)
   and starts to swap placement of eles based on value

--Merge Sort (divide into equal halves + merge)
  - divide into two equal halves, then sort + combine
  -delcare lleft, right, middle
  -sort first half, then second half and then merge

  --Arr.sort((a, b) => a - b)
*/

let nums = [0, 1, 0, 4, 15]

function moveZeroesCompare (a, b) {
  if (a === 0) return 1
  if (b === 0) return -1
  return a - b
}

let sortedNums = nums.sort(moveZeroesCompare)
console.log(sortedNums)  // Output => [1, 4, 15, 0, 0]

let arr = [3, 64, 12, 840, 93, 75]
console.log(arr.sort())  // Output => [12, 3, 64, 75, 840, 93]

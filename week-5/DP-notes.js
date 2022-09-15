
// let range = (start, end, arr = []) => {
//   if (start === end) return []
//   return [start, ...range(start + 1, end)]
// }

// Default Parameters

let range2 = (start, end, arr = []) => {
    if(start === end) return arr
      arr.push(start)
      return range(start + 1, end, arr)

}


console.log(range(4, 12))
console.log(range2(4, 12))

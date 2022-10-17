const combinations = array => {
  let combos = []

  for (let i = 0; i < array.length; i++) {
    let ele = array[i]

    for (let j = i + 1; j < array.length; j++) {
      let ele2 = array[j]

      combos.push([ele, ele2], [ele2, ele])
    }
  }
  return combos
}

const arr = ['hexadecimal', 'decimal', 'ASCII']
console.log(permutations(arr))

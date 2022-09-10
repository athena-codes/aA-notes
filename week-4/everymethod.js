
let veggies = ['lettuce', 'celery', 'cabbage', 'watercress']

function containsA(ele) {
   return ele.includes('a')
}

let result = veggies.every(containsA)
console.log(result)

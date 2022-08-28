let array = [
    ['a', 'b'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h']
]
let str= ''  

for (let i = 0; i < array.length; i++) {
    let subarray = array[i]

    for (let j = 0; j < subarray.length; j++) {
        str += (subarray[j])                // iterates thru entire 2D array and prints values at each index, as one line
    }
}
console.log(str)

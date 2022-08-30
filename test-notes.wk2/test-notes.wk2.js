//--First, create a function called getAverage(nums) which takes a single array
// of numbers and returns the average.



function getAverage(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        sum += num
    }
    return sum / nums.length
}


console.log(getAverage([5, 10]));

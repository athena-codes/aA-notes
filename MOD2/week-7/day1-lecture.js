
// Refactoring Code
    const dry = arr => {
        return arr.filter((ele, index) => {
            if (index < arr.length) {
                return ele < arr[index + 1];
            }

        })
    };



let arr = [1, 156, 3, 847, 1, 2, 33, 35, 84]
console.log(dry(arr))

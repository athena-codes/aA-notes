// Error

// const add = (num1, num2) => num1 + num2

const add = (num1, num2) => {
    try {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 - num2
        } else {
            throw new TypeError("Type Error: Invalid output, please input a number.")
        }
    } catch (e) {
        console.error(e.message)
    }
}

console.log(add('banana', 'orange'))

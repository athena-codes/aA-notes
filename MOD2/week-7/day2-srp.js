// Single-Responsibilty Principle (SRP)
// -Helper functions are good for SRP


// Example 1

const helper = (ele) => {
    if(typeof ele === "number") {
        return ele
    }
}


const adder = (arr, newArr = []) => {

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]

      if (helper(ele)) {
        newArr.push(ele + ele)
      } else {
        newArr.push(ele)
      }
        // if(typeof ele === "string") {
        //      newArr.push(ele)

        // } else if(typeof ele === "number") {
        //      newArr.push(ele + ele)

        // } else if (typeof ele === "boolean") {
        // newArr.push("this is a boolean")
        // }
    }
    return newArr
}

let arr1 = [234, 43, 55, 63, 5, 6, 235, 547, "", "erigu", true, false, "wsjgdk"]

console.log(adder(arr1))



// Example 2

let str = "Patrick is a Teacher"


const lowerCase = (cmd) => {
     return str.toLowerCase()
}

const upperCase = (cmd) => {
     return str.toUpperCase()

}

const repeat = (cmd) => {
     return str.repeat(1)

}

const reverse = (cmd) => {
     return str.reverse()
}


const strChanger = (str,command) => {

  if (command === "upperCase") {
    return upperCase(str)

  } else if (command === "lowerCase") {
    return lowerCase(structuredClone)

  } else if (command === "repeat") {
      return repeat(str)
  }
  else if (command === "reverse") {
      return reverse(str)
  }
}

console.log(strChanger(str, "upperCase"))

function simpleHash (str) {
  let hashValue = 0

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i)
  }

  return hashValue
}
// uses charCodeAt() to retrieve the integer ASCII value of each character in the string,
// adds them all up and returns the total.

console.log(simpleHash("hi"))  // => 209
console.log(simpleHash('haslkjhhdalndajlskndasi')) // => 2420


// Hash Tables

data = [null, null, null, null, null, null, null, null]

function hash (str) {
  let hashValue = 0

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i)
  }

  return hashValue
}

function hashMod (key) {
  return hash(key) % data.length
}

hash("key");            // 329
hashMod("key");         // 1

hash("new key");        // 691
hashMod("new key");     // 3


class KeyValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
}


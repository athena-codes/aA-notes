// Making a hash table class

class HashTable {
  constructor () {
    this.numBuckets = new Array(200)
    this.size = 0
  }
  hash(key) {
    let hash = 0

    for(let i = 0; i < key.length; i++) {
        console.log(key.charCodeAt(i))
        hash += key.charCodeAt(i)
    }
    return hash % this.numBuckets.length
  }
  set (key, value) {
    const index = this.hash(key)
    this.numBuckets[index] = [key, value]
    this.size++
  }
  get(key) {
    const target = this.hash(key)
    return this.numBuckets[target]
  }
}

let hashTable = new HashTable()
console.log(hashTable.hash("Athena"))

hashTable.set("Athena", 5)
hashTable.set('Rose', 4)
hashTable.set('Patrick', 2)

console.log(hashTable)
console.log(hashTable.get("Athena"))

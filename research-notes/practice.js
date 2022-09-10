// Object oriented javascript

let person = function(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}

const athena = new person('athena', 21, 'programmer')
console.log(athena)

person.prototype.location = function() {}

athena.location()

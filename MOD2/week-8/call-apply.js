// Call & Apply
// Apply: takes an array of args
// Call: takes args seperated by commas
// Using arrow functuons automatically binds to class; don't use inside class methods 


class Cat {
    constructor(name) {
        this.name = name
    }
    purr() {
        console.log(`${this.name} says meow`);
    }
}

class Dog {
    constructor(name) {
        this.name = name
    }
    bark(person) {
        console.log(`${this.name} says woof to ${person}`);
    }
}


let cat = new Cat("Juice");
let dog = new Dog("Puppy");

// Protoypical Inheritance
cat.purr.call(dog)      // borrow another class method that are not inherited, properties must be the same
dog.bark.call(cat, "Athena")  // can pass in parameters as well
dog.bark.apply(cat, ["Athena"])



// Concatenate using apply

const array = ['a', 'b']
const array2 = [0, 1 , 2]

array.push.apply(array, array2)
console.log(array)

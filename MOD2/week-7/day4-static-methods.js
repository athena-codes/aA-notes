// Static Methods

const { Pen } = require("./pen-api.js")
console.log(Pen)


class IceCream {
    constructor(flavor, toppings) {
        this.flavor = flavor
        this.toppings = toppings || []
        this.price = 1.5 + this.toppings.length * .05
        IceCream.addtoTotal(this)
    }
    static totalIceCream = []

    static addtoTotal(instance) {
        this.totalIceCream.push(instance)
    }
}

let vanilla = new IceCream('Vanilla', ['sprinkes', 'strawberry'])
console.log(IceCream.totalIceCream)
console.log(IceCream.addtoTotal(vanilla))



// Polymorphism
// Function overloading: sending a diff num or type of parameters to a particular funct
// Function overriding: child class gives its own version of the implementation of
// a function from one of its ancestor classes (usually the parent)

// Inhertiting Classes

// class Car {
//     constructor(brand, model) {
//         this.brand = 'Honda';
//         this.model = 'Civic';
//     }

//     carInfo() {
//         return `${this.brand} ${this.model}`;
//     }
// }

// const merc = new Car('Mercedes', 'C-Class');
// console.log(merc.carInfo());


// class Fruit {
//     constructor(color, taste) {
//         this.color = color;
//         this.taste = taste;
//     }

//     eat() {
//         console.log(`You ate a ${this.constructor.name}.`);
//     }
// }

// class Apple extends Fruit {
//     constructor() {
//         super('red', 'sweet');
//     }
// }

// const orange = new Fruit('orange', 'tangy');
// const apple = new Apple();
// console.log(orange.eat())


// Class is a form of encapsulation

class Vehicle {   // delcaration
     constructor(color) {  // constructor function
       this.color = color;  // properties
    }

    pressHorn() {
        console.log('beep beep');
    }
}

class Truck extends Vehicle {   // inheritance w/ extends
    constructor(color) {
        super(color);  // super to inheret constructor parameters (properties)
    }

    pressHorn() {
        console.log('honk honk');  // polymorphism on method
    }
}

class Bike extends Vehicle {
    constructor(color) {
        super(color);
    }

    pressHorn() {
        console.log('ding ding');
    }
}

let car = new Vehicle('red');
let truck = new Truck('black');
let bike = new Bike('light brown');

car.pressHorn();
truck.pressHorn();
bike.pressHorn();

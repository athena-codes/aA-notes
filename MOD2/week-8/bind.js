// Bind
class Cat {
    constructor(name) {
    this.name = name
    }
    purr() {
        console.log(`${this.name} says meow`);
    }
}

let cat = new Cat("Missy");

let sayMeow = cat.purr;
// sayMeow(); // TypeError: this.purr is not a function

// You can now use the built in Function.bind to ensure your context, `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);  // bound to the context of 'cat' instance

// You still *need* to invoke the function
boundCat(); // prints "meow"

//WARMUP
//✅ Make a parent animal class and a child class that extends the parent class.
//✅  Use at least two properties on the parent that the child can inherit.
//✅  Use at least one method on the parent that the child can inherit.
//✅  Make at least one unique property on the child.
//✅  Make at least on unique method on the child.

class Animal {
   constructor(type, species, mammal) {
       this.type = type
       this.species = species
       this.mammal = mammal
   }
   isMammal() {
     if (this.mammal) {
        return true
     }
   }
}

class Cat extends Animal {
    constructor(type, species, mammal, fourLegged, color) {
        super(type, species, mammal, fourLegged, color)
        this.fourLegged = fourLegged
        this.color = color
    }
    hasFourLegs() {
      if (this.fourLegged)
        console.log(`The ${this.type} cat is 4 legged.`)
   }
   isMammal() {
    if (this.mammal) {
      console.log(`${this.species} is a mammal`)
   } else {
        console.log(`${this.species} is not mammal`)
   }
}
}


console.log(Animal, Cat)

let tabby = new Cat('tabby','feline', true, true, 'orange')

console.log(tabby.hasFourLegs())
console.log(tabby.isMammal())
console.log(tabby)

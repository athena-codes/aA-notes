// Context
// Context refers tto the value of 'this' within a funct and 'this' refers to where a funct is invoked
// If a funct is invoked on the object it wwas created in its context stays the same

class Pokemon { //template or bluePrint for our instances
    constructor(name, level, type, trainer) { //params for constructor
        this.name = name
        this.level = level
        this.type = type
        this.trainer = trainer

    }
    levelUp() {
        this.level += 1
        return this.level

    }
    showName() {
        return this.name

    }
    whosPokemon() {
        return this.trainer
    }

}

let Pikachu = new Pokemon('Pikachu', 5, 'Electric', 'ash')
// If a funct (not invoked) is assigned to a var, its context changes
let level = 5
const method = Pikachu.levelUp
method()
console.log(level)
// If a funct (not invoked) is passes as a cb, its context changes
let arr = [1, 5, 6, 8]
console.log(arr.map(Pikachu.levelUp))


function someFunc() {
    console.log(this.global)
}

someFunc()

// Use strict + .bind()

// 'use strict';
let mistypeVariable;

mistypeVarible = 17;  // Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
console.log(mistypeVarible)

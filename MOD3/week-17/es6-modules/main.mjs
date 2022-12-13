
// Syntax to import modules from other file
import add from './app.mjs'
// if exported as obj, must be destructured in import 
import { subtract } from './app.mjs'



console.log(add(1, 1))   // => 2
console.log(subtract(2, 1))  // => 1

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// E.L BASICS

// grandparent.addEventListener('click', e => {
//     // prints event obj, what the 2nd para of A.E.L (cb function) takes as it's parameter
//     console.log(e)
//     // target = ele the event happened on, returns the element in console
//     console.log(e.target)
//     // prints a mesage to console when event happened
//     console.log('Grandparent 1')
// })



// EVENT BUBBLING
// bubbles move up the tree (innermost element towards outer)

// grandparent.addEventListener('click', e => {
//   console.log('GP bubble')
// })

// parent.addEventListener('click', e => {
//   console.log('P bubble')
// })

// child.addEventListener('click', e => {
//   console.log('C bubble')
// })

// document.addEventListener("click", e => {
//     console.log('DOCUMENT bubble')
// })


// EVENT CAPTURING
// A.E.L function can take third para; capture option (default set to falseh)

grandparent.addEventListener('click', e => {
  console.log('GP capture')
  // e.stopPropagation()
}, { capture: true })


parent.addEventListener('click', e => {
    console.log('P capture')
  // EVENT STOP PROPOGATION
  // event immediately stops here, only doc, GP + P prints
  // e.stopPropagation()
}, { capture: true })

child.addEventListener('click', e => {
  console.log('C capture')
}, { capture: true })

document.addEventListener('click', e => {
  console.log('DOCUMENT capture')
}, { capture: true })


// Bubble prints inner -> outer
// Capture prints outer -> inner


// RUN AN EVENT ONCE

// grandparent.addEventListener('click', e => {
//   console.log('GP bubble')
// })

// parent.addEventListener('click', printHi)

// // after 2 secs, parent event listener is removed and wont run again
// // need to define a function to use remove event listener
// // anonymous functions aren't the same
// setTimeout(() => {
//    parent.removeEventListener("click", printHi)
// }, 2000)

// child.addEventListener('click', e => {
//   console.log('C bubble')
// })


// function printHi() {
//     console.log('Hi!')
// }

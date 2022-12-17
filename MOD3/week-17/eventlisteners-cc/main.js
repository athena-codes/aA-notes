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

grandparent.addEventListener('click', e => {
  console.log('GP')
})

parent.addEventListener('click', e => {
  console.log('P')
})

child.addEventListener('click', e => {
  console.log('C')
})


document.addEventListener("click", e => {
    console.log('DOCUMENT')
})

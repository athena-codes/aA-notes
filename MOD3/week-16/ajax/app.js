// USING FETCH API

// const flag = document.createElement('img')
// document.body.appendChild(flag)

// console.log("Let's go!")

// fetch('https://restcountries.com/v3.1/all')
//   .then((res) => {
//      return res.json()
//   }).then((json) => {
//     flag.src = json[0].flag
//     console.log(flag)
//     console.log("Flag added!")
//   }).catch((err) => {
//     console.log('Errors:' + err.message)
//   })

//   console.log("Done!")

// --response represents completion or failure of an HTTP request
// let response = fetch('https://restcountries.com/v3.1/all')
// console.log(response)


// lets go and done print to console, however button is blocked from printing until click event occurs
const button = document.querySelector('button')

console.log("Let's go!")

button.addEventListener('click', () => {
    console.log('Button clicked')
})

console.log('Done')

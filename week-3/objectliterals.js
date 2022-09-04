//--Object Literals

// let user = {
//       name: 'athena',    // key value pair = one property
//       age: 21,
//       location: 'CT',
//       email: 'athenarose964@gmail.com',
//       blogs: ['tumblr.com', 'instagram.com']
//     }

// console.log(user)
// console.log(user.name)


// user.age = 22     // to update value of a key
// console.log(user.age)
// console.log(user)

console.log(user['name'])

let key = 'location'    // can def variable to represent value of key
console.log(user[key])   // but can only be printed in bracket notation

console.log(typeof user)   // returns 'object'


let user = {
  name: 'athena',    // key value pair = one property
  age: 21,
  location: 'CT',
  email: 'athenarose964@gmail.com',
  blogs: ['tumblr.com', 'instagram.com'],
  login: function () {
    console.log('the user is logged in')
  }
}
user.login()   // prints 'the user is logged in'

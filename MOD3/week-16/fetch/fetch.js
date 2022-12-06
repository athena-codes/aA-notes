//fetch data from user.json file, then print the response

// response includes network info about response inside object printed to console
fetch("user.json").then((res) => {
  console.log(res)
})

// response first object w/ network info then it returns with user object
fetch('user.json')
  .then(res => {
    return res.json()
  })
  .then(user => {
    console.log(user)
  })

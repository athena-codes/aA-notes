let promise = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('SUCCESS')
  } else {
    reject('FAIL')
  }
})

// anything .then runs for resolve
promise.then((msg) => {
    console.log('This is in the then and it was a ' + msg)
    // anything .catch runs for reject
}).catch((msg) => {
    console.log('This is in the catch and it was a ' + msg)
})

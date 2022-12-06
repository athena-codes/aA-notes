const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
]

function getPosts () {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

function createPost (newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.push(newPost)

          const error = false

          if (!error) {
            resolve()
          } else {
            reject('Error: Something went wrong')
          }
        }, 2000)
    })
}


// Using .then/.catch
// dont invoke getPosts or else post 3 does not show up in DOM

// createPost({title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(error => console.log(error))



// Using async/await

async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' })

  getPosts()
}

init()


// // Using async/await with fetch

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await res.json

//     console.log(data)
// }
// fetchUsers()



// Using Promise.all

// const promise1 = Promise.resolve('Hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// // takes as long as the longest promise to show all values
// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//     console.log(values)
// })

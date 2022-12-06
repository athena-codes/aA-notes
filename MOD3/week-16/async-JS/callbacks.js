const posts = [
{title: 'Post One', body: 'This is post one'},
{title: 'Post Two', body: 'This is post two'}
]

// loads post to browser after 1 sec
function getPosts() {
    setTimeout(() => {
      let output = ''
      posts.forEach((post, index) => {
         output += `<li>${post.title}</li>`
      })
      document.body.innerHTML = output
    }, 1000)
}

function createPost(newPost, callback) {
    setTimeout(() => {
      posts.push(newPost)
      callback()
    }, 2000)
}

// waits for createPost to finish before executing callback so that
// new post appears in the DOM 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts)

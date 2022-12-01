const http= require('http')
const fs = require('fs')
const port = 3000

// Get the file contents of the profile-page.html as a string
const htmlTemplate = fs.readFileSync('profile-page.html', 'utf-8')

const htmlPage = htmlTemplate
  // replace all instances of #{username} in the HTML file with 'DemoUser'
  .replace(/#{username}/g, 'DemoUser')
  // replace all instances of #{biography} in the HTML file with 'Hello World!'
  .replace(/#{biography}/g, 'Hello World!')


  const server3 = http.createServer((req, res) => {
})

server3.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})

console.log(htmlPage)

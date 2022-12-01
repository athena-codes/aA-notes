// How to create a server

// inmport http pckg
const http = require('http')
const fs = require('fs')
const port = 3000

// use createServer method to create a new server
// const server = http.createServer((req, res) => {
// //   console.log(req)
// // console.log(res)
//   res.status = 200
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   fs.readFile('index.html', function(error, data) {
//       if (error) {
//           res.writeHead(404)
//           res.write('Error: File Not Found')
//         } else {
//             res.write(data)
//         }
//         res.end('The end!')
//   })
// })

// example of sending messages thru server

// const server2 = http.createServer((req, res) => {
// if (req.method === 'GET' && req.url === '/') {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   return res.end('Splash Page')
// }
// if (req.method === 'POST' && req.url === '/cat') {
//   res.statusCode = 201
//   res.setHeader('Content-Type', 'text/plain')
//   return res.end('Created a Cat!')
// }
// if (req.method === 'POST' && req.url === '/helloworld') {
//   res.statusCode = 201
//   res.setHeader('Content-Type', 'text/plain')
//   return res.end('Hello World!')
// }

// })

// sends an image over the server as response

const server3 = http.createServer((req, res) => {
  const catImage = fs.readFileSync('./images/cat.png')

  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.end(catImage)
})


server3.listen(port, function(error) {
    if (error) {
      console.log('Something went wrong', error)
    } else {
      console.log('Server is listening on port ' + port)
    }
})

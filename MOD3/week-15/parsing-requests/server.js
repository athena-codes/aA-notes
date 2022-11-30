const http = require('http')
const fs = require('fs')
const port = 8000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/css')
  res.write('Hello')
  res.write(' ')
  res.write('World')
  res.write('!')

  let reqBody = ''
  req.on('data', data => {
    reqBody += data
  })

  req.on('end', () => {
    console.log(reqBody)
  })
})

server.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

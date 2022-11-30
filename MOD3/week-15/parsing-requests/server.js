const http = require('http')
const fs = require('fs')
const port = 5000


const server = http.createServer((req, res) => {
  let reqBody = ''
  req.on('data', data => {
    reqBody += data
  })
})

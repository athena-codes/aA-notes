// How to create a server

// inmport http pckg
const http = require('http')

// use createServer method to create a new server
const server = http.createServer((req, res) => {
// ...
})

const port = 5000

server.listen(port, () => console.log('Server is listening on port', port))

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const exphbs = require('express-handlebars')

// directory references
const clientDir = path.join(__dirname, '../client')

// set up the Express App
const app = express()
const PORT = process.env.PORT || 8000

// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve up the public folder so we can request static
// assets from the client
app.use(express.static(`${clientDir}/public`))

// start the express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

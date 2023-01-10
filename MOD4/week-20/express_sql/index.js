// Instantiate Express and the application
const express = require('express')
const app = express()

// Process environment variables
require('dotenv').config()

// Instantiate SQLite and database
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(process.env.data_source, sqlite3.OPEN_READWRITE)

// --> Using a constant for the database name, if used, should only be a temporary part
// of the code. Environment variables are the right place to put database
// connection information (e.g. process.env.data_source).

// Express using json
app.use(express.json())

// Routes
// --> For SELECT requests, use db.all
app.get('/trees', (req, res, next) => {
  console.log('GET request successful.')

  const sql = 'SELECT * FROM trees'
  const params = []

  db.all(sql, params, (err, rows) => {
    // error handling using if/else and next()
    if (err) {
      next(err)
    } else {
      // returns rows in JSON format
      res.json(rows)
    }
  })
})

// Using 'run' on non-SELECT  SQL statements
// --> Use db.run
app.post('/trees', (req, res, next) => {
  const sql = `
        INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
        VALUES (?, ?, ?, ?);
    `
  const params = [
    req.body.name,
    req.body.location,
    req.body.height,
    req.body.size
  ]

  db.run(sql, params, err => {
    if (err) {
      next(err)
    } else {
      // -> Generic success message
      //   res.json({
      //     message: 'success'
      //   })

      // -> Useful to return the row that was added, removed or modified
      // SQL QUERY NEW ROW
      const sqlLast = 'SELECT * FROM trees ORDER BY id DESC LIMIT 1'

      // Call database to INSERT and, if successful, return new row
      db.run(sql, params, err => {
        if (err) {
          next(err)
        } else {
          db.get(sqlLast, [], (err, row) => {
            res.json(row)
          })
        }
      })
    }
  })
})

// Set port and listen for incoming requests
const port = 5000
app.listen(5000, () => console.log('Server is listening on port', port))

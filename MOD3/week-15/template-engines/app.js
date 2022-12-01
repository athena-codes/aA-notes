const express = require('express')

const app = express()
const port = 3000

app.set("view engine", "pug")


app.get("/", function(req, res) {
  res.render('index', { title: 'Hello', message: 'Hello World!' })
})

app.listen(port, () => console.log(`Template engine listening on ${port}`))

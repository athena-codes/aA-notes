const express = require('express')


const app = express()

app.get("/", (req, res) => {
    res.send('home')
})

app.get('/time', (req, res) => {
    res.send('The current time is ' + (new Date()).toLocaleTimeString())
})






const port = 3000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

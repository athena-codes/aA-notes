const express = require('express')
const logger = require("morgan")

const port = 5000
const indexRouter = require("./routes/index.js")
const usersRouter = require('./routes/users.js')
const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use("/", indexRouter)
app.use("/users", usersRouter)

// slash page GET route ->
// app.get('/', (req, res) => {
//     return res.status(200).send('Welcome to our express app.')
// })


app.use((req, res, next) => {
    const err = new Error("Sorry, the requested resource cannot be found")
    err.statusCode = 404
    next(err)
})

app.use((err, req, res, next) => {
    console.log(err)
    const statusCode = err.statusCode || 500
    res.status(statusCode)
    res.json({
        message: err.message || "Something went wrong",
        statusCode
    })
})


app.listen(port, () => console.log(`Server is listening on port: ${port}`))

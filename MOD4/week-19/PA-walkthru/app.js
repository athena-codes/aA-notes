const express = require('express')
const logger = require('morgan')

const app = express()


const router = express.Router();
router.get('/hello', (req, res) => { console.log("Hello!") } );

app.use('/world', router);


app.post('/:word', (req, res) => {  res.status(200).json({
    word: req.params.word }) });

app.use('/hello', express.static('world'))


// number 3 will not be executes due to order of execution + conflicting error handling middlewares
// 1:
app.get('/', (req, res, next) => {
  next(err);
});

// 2:
app.use((err, req, res, next) => {
  next(err);
});

// 3:
app.use((err, req, res, next) => {
  return res.json();
});

// 4:
app.use((req, res, next) => {
  next();
});


const port = 5000
app.listen(port, () => console.log("Port is listening on port: ", port))

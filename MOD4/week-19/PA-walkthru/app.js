const express = require('express')
const logger = require('morgan')

const app = express()
const router = express.Router();


// router.get('/hello', (req, res) => { console.log("Hello!") } );

// app.use('/world', router);


// app.post('/:word', (req, res) => {  res.status(200).json({
//     word: req.params.word }) });

// app.use('/hello', express.static('world'))


// // number 3 will not be executes due to order of execution + conflicting error handling middlewares
// // 1:
// app.get('/', (req, res, next) => {
//   next(err);
// });

// // 2:
// app.use((err, req, res, next) => {
//   next(err);
// });

// // 3:
// app.use((err, req, res, next) => {
//   return res.json();
// });

// // 4:
// app.use((req, res, next) => {
//   next();
// });

// app.get('/', (req, res) => {
//   res.json('Hello World')
// })


// router.get('/:name', (req, res) => { console.log('This works!') });

// app.use('/colors', router);


// middleware below are listed in order

// // 1:
// app.use((err, req, res, next) => {
//   next(err)
// })

// // 2:
// app.post('/colors', (req, res, next) => {
//   next()
// })

// // 3:
// app.use((req, res, next) => {
//   next()
// })

// // 4:
// app.use((err, req, res, next) => {
//   return res.json()
// })

// app.use((req, res, next) => {
//   const { color } = req.body
//   if (color === 'green') {
//     return next(new Error('This is an awesome color!'))
//   }
//   return res.json('This color is alright.')
// })


// const middleware = [
//   (req, res, next) => {
//     if (req.params.id) {
//       next()
//     } else {
//       next(new Error('Needs an id route parameter'))
//     }
//   },
//   (err, req, res, next) => {
//     return res.json({ message: err.message })
//   }
// ]

// router.get('/:name', middleware);

// app.use('/colors', router);


// route handlers below are listed in order
// 1:
app.put('/:green', (req, res) => {console.log('This works! 1 ') });

// 2:
app.put('/color', (req, res) => { console.log('This works! 2 ')
 });

// 3:
app.put('/color/:green', (req, res) => { console.log('This works! 3 ')
 });

// 4:
app.put('/:color', (req, res) => { console.log('This works! 4')
 });


const port = 5000
app.listen(port, () => console.log("Port is listening on port: ", port))

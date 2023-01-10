var express = require('express');
var router = express.Router();
const app = express()

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// QUESTION 1: -> GET /green worked
// router.get('/:name', (req, res) => { console.log('This works!') });

// app.use('/colors', router);

// QUESTION 2 -> NO it is not invoked due to errors
// middleware below are listed in order
// 1:
// app.use((err, req, res, next) => {
//   next(err)
// })

// // 2:
// app.post('/colors', (req, res, next) => {
//   res.json({
//     word: "true"
//   })
//   next()
// })

// // 3:
// app.use((req, res, next) => {
//   next()
// })

// // 4:
// app.use((err, req, res, next) => {
//   console.log('This works!')
//   return res.json()
// })

// QUESTION 3
app.get('/', (req, res) => {
  res.json('Hello World')
})



module.exports = router;

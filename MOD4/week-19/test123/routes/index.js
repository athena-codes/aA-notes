var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// In the code above, assume that all the middleware are defined
// and connected in order from 1-4.
// Will middleware 3 be invoked for a request to GET /hello?
// middleware below are listed in order

// 1:
// app.get('/', (req, res, next) => {
//   console.log("1 invoked")
//   next(err)
// })

// // 2:
// app.use((err, req, res, next) => {
//   console.log('2 invoked')
//   next(err)
// })

// // 3:
// app.use((err, req, res, next) => {
//   console.log('3 invoked')
//   return res.json()
// })

// // 4:
// app.use((req, res, next) => {
//   console.log('4 invoked')
//   next()
// })

// Which route handler will be invoked for a POST /hello
// request if all the route handlers are defined in order
//from 1-4?
// route handlers below are listed in order
// 1:
app.post('/world', (req, res) => {
  res.status(200).json({
  body: req.body
})
  console.log('1 invoked')
 });

// 2:
app.post('/:word', (req, res) => {
  console.log('4 invoked')
res.status(200).json({
    word: req.params.word })
 });

// 3:
app.post('/hello', (req, res) => {
  res.status(200).json({
    body: req.body
  });
  console.log('3 invoked')
})

// 4:
app.post('/:word', (req, res) => {
  console.log('4 invoked')
  res.status(200).json({
  word: req.params.word
})

 });




module.exports = router;

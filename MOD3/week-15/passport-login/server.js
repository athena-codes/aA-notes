if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
// take forms from email and pw and access them inside req var in post method
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// page redirected to when user logs in (homepage) + shows name based on user input
app.get('/', checkAuthenticated, (req, res) => {
                          // shows name that user inputs
  res.render('index.ejs', { name: req.user.name })
})

// page redirected to log in page
app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

// when login info is sent, redirect to homepage if credentials match
// or if wrong password redirect to login screen
app.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

// hashes password on each user login
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // add users to user array w/ all info inputed (password hashed)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    // if failure redirect to register page
    res.redirect('/register')
  }
  console.log(users)
})

app.delete('/logout', (req, res, next) => {
  req.logOut(err => {
    if (err) {
      return next(err)
    }
    res.redirect('/login')
  })
})


function checkAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

// app running on localhost:3000
app.listen(3000)

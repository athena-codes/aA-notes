const express = require("express")

const router = express.Router()

const users = {
  1: {
    id: 1,
    fristName: 'Athena',
    hobbies: ['anime', 'video-games', 'coding']
  }
}

// get all users route
router.get('/', (req, res) => {
  return res.status(200).send(users)
})

// get specific user
router.get('/:id', (req, res) => {
  const id = req.params.id
  // console.log('user id: ', id)
  if (users[id]) {
    return res.status(200).send(users[id])
  } else {
    return res.status(404).send('User ID not found')
  }
})

// make new user post
router.post('/', (req, res) => {
  // middleware function ->
  const user = req.body

  users[user.id] = user
  // console.log("this is our user/body: ", user)
  return res.status(201).send(users[user.id])
})

// update with put/patch on specific user
router.put('/:id', (req, res) => {
  // stringt to number coersion
  const id = req.params.id * 1
  const updatedUser = req.body

  if (id === updatedUser['id'] && users[id]) {
    users[id] = updatedUser
    return res.status(200).send(users[id])
  } else {
    res.status(404).send('User ID not found.')
  }
})

// delete user
router.delete('/:id', (req, res) => {
  const id = req.params.id

  if (users[id]) {
    delete users[id]
    return res.status(200).send('User has been deleted.')
  } else {
    return res.status(404).send('User does not exist.')
  }
})


module.exports = router

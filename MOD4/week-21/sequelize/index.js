const Sequelize = require('sequelize')

// create a new Sequelize instance with the connection details
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

// define a model for the table
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// sync the defined model to the database
sequelize
  .sync()
  .then(() => console.log('Table created successfully'))
  .catch(err => console.log('Error while creating table:', err))

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  password: String,
  googleId: String
})

const User = mongoose.model('User', userSchema)

module.exports = User

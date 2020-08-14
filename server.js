const mongoose = require('mongoose')
const express = require('express')
// const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
// const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const socket = require('socket.io')
const PORT = process.env.PORT || 3001

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // <-- location of the react app were connecting to
//     credentials: true
//   })
// )
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  })
)
app.use(passport.initialize())
app.use(passport.session())
require('./config/passportConfig')(passport)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/skip-the-line',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

// Start the API server
const server = app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
)

const io = socket(server)

io.on('connection', socket => {
  console.log('Made a socket connection')
  socket.on('event', event => {
    io.emit('event', event)
  })
})

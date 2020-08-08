const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app were connecting to
    credentials: true
  })
)
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
  })
)
app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passportConfig')(passport)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Add routes, both API and view
app.use(routes)

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/skip-the-line',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
)

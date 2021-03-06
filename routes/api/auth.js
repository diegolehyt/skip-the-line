const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const { Store } = require('../../models')
const passport = require('passport')

router.post('/local', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user)
      res.status(400).send({
        message: 'Invalid Username or Password'
      })
    else {
      req.logIn(user, err => {
        if (err) throw err
        return res.json({ ...user, isAuthenticated: true })
      })
    }
  })(req, res, next)
})

router.get('/google', passport.authenticate('google', { scope: ['email'] }))

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/home')
})

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err
    if (doc)
      res.status(400).send({
        message: 'This email already exists.'
      })
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword
      })
      await newUser.save()
      res.redirect(307, '/api/auth/local')
    }
  })
})

router.get('/user', function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({})
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({ ...req.user, isAuthenticated: true })
  }
})

router.get('/stores', function (req, res) {
  // res.json({name: "Diego"})
  Store.find()
    .then(stores => res.json(stores))
    .catch(err => res.status(500).json(err))
})

router.get('/logout', function (req, res) {
  req.logout()
  req.session = null
  res.redirect('/')
})

module.exports = router

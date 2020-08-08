const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const passport = require('passport')

// Routes
router.post('/login', (req, res, next) => {
  console.log('hi')
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.send('Successfully Authenticated')
        console.log(req.user)
      })
    }
  })(req, res, next)
})
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err
    if (doc) res.send('User Already Exists')
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword
      })
      await newUser.save()
      res.redirect(307, '/api/users/login')
    }
  })
})

module.exports = router

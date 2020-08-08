const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const passport = require('passport')

router.post('/local', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, err => {
        if (err) throw err
        res.send('Successfully Authenticated')
        // return res.redirect('/home')
      })
    }
  })(req, res, next)
})

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] }, (req, res) => {})
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/home',
    failureRedirect: 'http://localhost:3000/login'
  })
)

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
      res.redirect(307, '/api/auth/local')
    }
  })
})

module.exports = router

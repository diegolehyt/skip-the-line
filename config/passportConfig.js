const { User } = require('../models')
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config()

module.exports = passport => {
  passport.use(
    new localStrategy(
      {
        usernameField: 'email'
      },
      (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
          if (err) throw err
          if (!user)
            return done(null, false, {
              message: 'Incorrect email.'
            })
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err
            if (result === true) {
              const { _id, email, __v } = user
              return done(null, {
                _id,
                email,
                __v
              })
            } else {
              return done(null, false, {
                message: 'Incorrect password.'
              })
            }
          })
        })
      }
    )
  )

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback'
      },
      async (accessToken, refreshToken, profile, cb) => {
        let user = await User.findOne({ email: profile._json.email })
        console.log(profile)
        if (!user) {
          try {
            user = await User.create({
              googleId: profile.id,
              email: profile._json.email
            })
          } catch (err) {
            console.error(err)
            return done(err, null)
          }
        }
        return cb(null, user)
      }
    )
  )

  passport.serializeUser(function (user, cb) {
    cb(null, user)
  })

  passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
  })
}

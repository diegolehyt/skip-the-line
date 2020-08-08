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
              return done(null, user)
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
        clientID:
          '526393775648-degj5i87qn5khamnkt7qomims62jdo3n.apps.googleusercontent.com',
        clientSecret: 'Fe02yZB4fOckI4qm8Hg7RFFV',
        callbackURL: '/api/auth/google/callback'
      },
      (accessToken, refreshToken, profile, cb) => {
        user = { ...profile }
        return cb(null, profile)
      }
    )
  )

  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email
      }
      cb(err, userInformation)
    })
  })
}

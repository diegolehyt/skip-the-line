const path = require('path')
const router = require('express').Router()
const stores = require('./stores')
const auth = require('./auth')

router.use('/stores', stores)
// router.use('/users', users)
router.use('/auth', auth)

module.exports = router

const router = require('express').Router()
const { Store } = require('../../models')

// Routes
router.post('/storeslist', (req, res) => {

  const newStore = new Store({
    name: req.body.email,
    address: req.body.email,
    storeCapacity: req.body.email,
    lineCapacity: req.body.email,
    logo: req.body.email,
    inLine:[],
    inStore: req.body.email,
    email: req.body.email,
    password: hashedPassword
  })
  newStore.save()
 
})

router.get('/', function (req, res) {
  // res.json({name: "Diego"})
  Store.find().then(stores => res.json(stores)).catch(err => res.status(500).json(err))
  console.log("*******ruta******")
  console.log(res)
})

module.exports = router

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
    inLine: [],
    inStore: req.body.email,
    email: req.body.email,
    password: hashedPassword
  })
  newStore.save()
})

router.get('/', function (req, res) {
  // res.json({name: "Diego"})
  Store.find()
    .populate('inLine')
    .then(stores => res.json(stores))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  Store.findById(req.params.id)
    .populate('inLine')
    .then(store => res.json(store))
    .catch(err => res.status(500).json(err))
})

// UPDATE one
router.patch('/:id', async (req, res) => {
  console.log(req.user.email)
  const store = await Store.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { inLine: req.user._id } },
    { new: true }
  ).populate('inLine')
  res.json(store)
  // Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
  //   inLine: req.body
  // })
  //   .then((dbModel) => res.json(dbModel))
  //   .catch((err) => res.status(422).json(err));
})

// DELETE one
router.delete('/:id', async (req, res) => {
  const store = await Store.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { inLine: req.user._id } },
    { new: true }
  ).populate('inLine')
  res.json(store)
})

module.exports = router

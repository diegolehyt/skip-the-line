const mongoose = require('mongoose')
const User = require("./User")
const Schema = mongoose.Schema

const storeSchema = new Schema({
  name: {
    type: String
  },
  address: String,
  storeCapacity: Number,
  lineCapacity: Number,
  logo: String,
  inStore: Number,
  inLine: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ]
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store

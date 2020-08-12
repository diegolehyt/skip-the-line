const Store = require("../models/Store")
const stores = require("../seed/stores.json")
const mongoose = require('mongoose')

// This file empties the stores collection and inserts the new stores below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/skip-the-line"
);

Store
  .remove({})
  .then(() => Store.collection.insertMany(stores))
  .then(data => {
    console.log(data.result.n + " Stores inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

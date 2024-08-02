//Name: Jinal Chandibhamar
//Student Number: 8961760

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  cuisine: String,
  rating: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;

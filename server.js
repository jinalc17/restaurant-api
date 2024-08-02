//Name: Jinal Chandibhamar

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define API Endpoints
app.get('/', (req, res) => {
  res.send('Restaurant API');
});

// Define the Restaurant model
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  cuisine: String,
  rating: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// RESTful API endpoints for managing restaurants
// POST /restaurants: Create a new restaurant
// GET /restaurants: Retrieve all restaurants
// GET /restaurants/:id: Retrieve a restaurant by ID
// PUT /restaurants/:id: Update a restaurant by ID
// DELETE /restaurants/:id: Delete a restaurant by ID

app.post('/restaurants', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!restaurant) {
      return res.status(404).send();
    }
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

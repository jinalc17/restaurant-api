# Name: Jinal Chandibhamar

# Restaurant API

This is a simple Node.js application using Express and MongoDB for managing a restaurant collection.

# API Endpoints
POST /restaurants: Add a new restaurant to the collection.
GET /restaurants: Retrieve all restaurants from the collection.
GET /restaurants/id: Retrieve a single restaurant by its ID.
PUT /restaurants/id: Update a restaurant by its ID.
DELETE /restaurants/id: Delete a restaurant by its ID.

## Setup Instructions

1. Open project in vs code
2. run 'npm install'
3. run 'node server.js'
4. Once the server is running on port 3000, open command prompt and run below curl commands to check CRUD.



# Testing

# Post restaurant data:
curl -X POST http://localhost:3000/restaurants -H "Content-Type: application/json" -d "{\"name\": \"The Culinary Experience\", \"address\": \"123 Flavor Street\", \"cuisine\": \"Fusion\", \"rating\": 4.5}"

curl -X POST http://localhost:3000/restaurants -H "Content-Type: application/json" -d "{\"name\": \"The Dhaba\", \"address\": \"100 Flavor Street\", \"cuisine\": \"Indian-Punjabi\", \"rating\": 4.5}"

curl -X POST http://localhost:3000/restaurants -H "Content-Type: application/json" -d "{\"name\": \"The Italian Cafe\", \"address\": \"133 Flavor Street\", \"cuisine\": \"Italian\", \"rating\": 4.5}"


# Captured ids from the post repsonse:
66722ae6f859a518198f7644
66722aeef859a518198f7646
66722af6f859a518198f7648

# Get all restaurant 
curl -X GET http://localhost:3000/restaurants

# Get a restaurant by ID
curl -X GET http://localhost:3000/restaurants/<id>

curl -X GET http://localhost:3000/restaurants/66722ae6f859a518198f7644

# Update a restaurant by ID
curl -X PUT http://localhost:3000/restaurants/66721857f859a518198f762f -H "Content-Type: application/json" -d "{\"name\": \"The Culinary Experience\", \"address\": \"123 Flavor Street\", \"cuisine\": \"Fusion\", \"rating\": 4.8}"

# Delete a restaurant by ID
curl -X DELETE http://localhost:3000/restaurants/<id>

curl -X DELETE http://localhost:3000/restaurants/66721867f859a518198f7633

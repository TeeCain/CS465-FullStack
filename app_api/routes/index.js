// Express app
const express = require('express');
// Router logic
const router = express.Router();

// Import the controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method Adds a Trip
 
// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); 

module.exports = router;

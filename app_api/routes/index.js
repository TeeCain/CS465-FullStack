// Express app
const express = require('express');
// Router logic
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripsList
 
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); // GET Method routes tripsFindByCode - requires parameter

module.exports = router;

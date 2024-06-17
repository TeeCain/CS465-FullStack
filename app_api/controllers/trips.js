const mongoose = require('mongoose');
// Register Model
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Results of query
        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res  
            .status(200)
            .json(q);
    }

};

// GET: /trips:/tripCode lists a single trip
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();
  
        // Results of query
        console.log(q);
  
    if (!q) {
      // Database returned no data
      return res.status(404).json(err);
    } else {
      // Return resulting trip list
      return res.status(200).json(q);
    }
  };

  // POST: /trips- Adds a new Trip
  // Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsAddTrip= async(req, res) => {
  const newTrip= new Trip({
  code: req.body.code,
  name: req.body.name,
  length: req.body.length,
  start: req.body.start,
  resort: req.body.resort,
  perPerson: req.body.perPerson,
  image: req.body.image,
  description: req.body.description
  });

  const q = await newTrip.save();
  if (!q)
    { // Database returned no data
      return res.status(400).json(err);
    }else 
    { // Return new trip
      return res.status(201).json(q);
    }
    
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip
};
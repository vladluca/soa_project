'use strict';
// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our parking schema
var ParkingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinates:{
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Parking', ParkingSchema);

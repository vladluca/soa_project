'use strict';
// Load required packages
var mongoose = require('mongoose');
var idValidator = require('mongoose-id-validator');

var Schema = mongoose.Schema;

// Define our booking schema
var BookingSchema = new Schema({
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  car : {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  }
});

BookingSchema.plugin(idValidator);

// Export the Mongoose model
module.exports = mongoose.model('Booking', BookingSchema);

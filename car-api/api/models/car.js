'use strict';
// Load required packages
var mongoose = require('mongoose');
var idValidator = require('mongoose-id-validator');

var Schema = mongoose.Schema;

// Define our car schema
var CarSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  mark:{
    type: String,
    required: true
  },
  parking : {
    type: Schema.Types.ObjectId,
    ref: 'Parking'
  }
});

CarSchema.plugin(idValidator);

// Export the Mongoose model
module.exports = mongoose.model('Car', CarSchema);

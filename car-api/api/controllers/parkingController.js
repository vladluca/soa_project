'use strict';

var mongoose = require('mongoose'),
  Parking = mongoose.model('Parking'),
  messages = require('../i18n/en.json');

// Create new parking based on model
exports.createParking = function(req, res) {
  var newParking = new Parking(req.body);
  newParking.save(function(err, parking) {
    if (err)
      return res.status(400).send(err);
    res.status(201).send(parking);
  });
};

// Get all parkings
exports.getParkings = function(req, res) {
  Parking.find({}, function(err, parkings) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send(parkings);
  });
};

// Get one parking by id
exports.getParking = function(req, res) {
  Parking.findById(req.params.parkingId, function(err, parking) {
    if (err)
      return res.status(500).send(err);
    if (parking) {
      return res.status(200).send(parking);
    }
    res.status(404).send(messages.parking_not_found);
  });
};

// Update existing parking by id
exports.updateParking = function(req, res) {
  Parking.findOneAndUpdate({_id: req.params.parkingId}, req.body, {new: true}, function(err, parking) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send(parking);
  });
};

// Delete a parking by id
exports.deleteParking = function(req, res) {
  Parking.remove({
    _id: req.params.parkingId
  }, function(err) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send({ message: messages.parking_delete_success });
  });
};

'use strict';

var mongoose = require('mongoose'),
  Car = mongoose.model('Car'),
  messages = require('../i18n/en.json');

// Create new car based on model
exports.createCar = function(req, res) {
  var newCar = new Car(req.body);
  newCar.save(function(err, car) {
    if (err)
      return res.status(400).send(err);
    res.status(201).send(car);
  });
};

// Get all cars
exports.getCars = function(req, res) {
  Car.find({})
    .populate('parking')
    .exec(function(err, cars) {
      if (err)
        return res.status(500).send(err);
      res.status(200).send(cars);
    });
};

// Get one car by id
exports.getCar = function(req, res) {
  Car.findById(req.params.carId)
    .populate('parking')
    .exec(function(err, car) {
      if (err)
        return res.status(500).send(err);
      if (car) {
        return res.status(200).send(car);
      }
      res.status(404).send(messages.car_not_found);
    });
};

exports.getAllCarsFromParking = function(req, res) {
  Car.find({parking: req.params.parkingId}, function(err, cars) {
    console.log(cars)
    if (err)
      return res.status(500).send(err);
    if (cars) {
      return res.status(200).send(cars);
    }
    res.status(404).send(messages.car_not_found);
  });
};

// Update existing car by id
exports.updateCar = function(req, res) {
  Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send(car);
  });
};

// Delete a car by id
exports.deleteCar = function(req, res) {
  Car.remove({
    _id: req.params.carId
  }, function(err) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send({ message: messages.car_delete_success });
  });
};

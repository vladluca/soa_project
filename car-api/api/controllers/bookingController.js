'use strict';

var mongoose = require('mongoose'),
  Booking = mongoose.model('Booking'),
  messages = require('../i18n/en.json');

// Create new booking based on model
exports.createBooking = function(req, res) {
  var newBooking = new Booking(req.body);
  newBooking.save(function(err, booking) {
    if (err)
      return res.status(400).send(err);
    res.status(201).send(booking);
  });
};

// Get all bookings
exports.getBookings = function(req, res) {
  Booking.find({}, function(err, bookings) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send(bookings);
  });
};

// Get one booking by id
exports.getBooking = function(req, res) {
  Booking.findById(req.params.bookingId, function(err, booking) {
    if (err)
      return res.status(500).send(err);
    if (booking) {
      return res.status(200).send(booking);
    }
    res.status(404).send(messages.booking_not_found);
  });
};

exports.getAllBookingsForCar = function(req, res) {
  Booking.find({car: req.params.carId}, function(err, bookings) {
    if (err)
      return res.status(500).send(err);
    if (bookings) {
      return res.status(200).send(bookings);
    }
    res.status(404).send(messages.booking_not_found);
  });
};

// Update existing booking by id
exports.updateBooking = function(req, res) {
  Booking.findOneAndUpdate({_id: req.params.bookingId}, req.body, {new: true}, function(err, booking) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send(booking);
  });
};

// Delete a booking by id
exports.deleteBooking = function(req, res) {
  Booking.remove({
    _id: req.params.bookingId
  }, function(err) {
    if (err)
      return res.status(500).send(err);
    res.status(200).send({ message: messages.booking_delete_success });
  });
};

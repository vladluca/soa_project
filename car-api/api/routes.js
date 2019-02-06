'use strict';

module.exports = function(app) {
  var cars = require('./controllers/carController');
  var users = require('./controllers/userController');
  var parkings = require('./controllers/parkingController');
  var bookings = require('./controllers/bookingController');
  var emails = require('./controllers/emailController');
  var contact = require('./controllers/contactController');

  //protected routes
  app.route('/cars')
    .post(cars.createCar)
    .get(cars.getCars);

  app.route('/cars/:carId')
    .get(cars.getCar)
    .put(cars.updateCar)
    .delete(cars.deleteCar);

  app.route('/parking/cars/:parkingId')
    .get(cars.getAllCarsFromParking);

  app.route('/refresh-token')
    .post(users.refreshToken);

  app.route('/parkings')
    .post(parkings.createParking)
    .get(parkings.getParkings);

  app.route('/parkings/:parkingId')
    .get(parkings.getParking)
    .put(parkings.updateParking)
    .delete(parkings.deleteParking);

  app.route('/bookings')
    .post(bookings.createBooking)
    .get(bookings.getBookings);

  app.route('/car/bookings/:carId')
    .get(bookings.getAllBookingsForCar);

  app.route('/bookings/:bookingId')
    .get(bookings.getBooking)
    .put(bookings.updateBooking)
    .delete(bookings.deleteBooking);

  //unprotected routes
  app.route('/users')
    .post(users.createUser);

  app.route('/users/authenticate')
    .post(users.login);

  app.route('/send-email')
    .post(emails.send);

  app.route('/contact-info')
    .get(contact.getContactInfo);
};

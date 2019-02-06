var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Car = require('./api/models/car'),
  User = require('./api/models/user'),
  Parking = require('./api/models/parking'),
  Booking = require('./api/models/booking'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken'),
  morgan = require('morgan'),
  config = require('./api/config'),
  messages = require('./api/i18n/en.json');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/CarsDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

var apiRoutes = express.Router();

if (config.tokenEnabled) {
// route middleware to verify a token
  apiRoutes.use(function (req, res, next) {
    var token = req.headers['x-auth-token'];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // decode token
    if (['/users', '/contact-info'].indexOf(req.baseUrl) === -1 && req.method !== 'OPTIONS') {
      if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.TOKEN_SECRET, function (err) {
          if (err) {
            //verify if the called route it's other then refresh-token
            if (!(req.baseUrl === '/refresh-token')) {
              return res.status(403).send({
                message: messages.auth_not_valid
              });
            }
          }
          req.decoded = jwt.decode(token);
          next();
        });

      } else {
        // if there is no token return an error
        return res.status(403).send({
          message: messages.token_missing
        });
      }
    } else {
      next();
    }
  });
} else {
  apiRoutes.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });
}


app.use(['/cars', '/car/bookings', '/refresh-token', '/parkings', '/parking/cars', '/bookings', '/users', '/contact-info'], apiRoutes);

var routes = require('./api/routes');

routes(app);

app.listen(port);
console.log('CarsApi listening on Port ' + port);
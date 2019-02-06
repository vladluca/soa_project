'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  messages = require('../i18n/en.json');

var jwt = require('jsonwebtoken');
var config = require('./../config')


// Create new user based on model
exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, car) {
    if (err)
      return res.status(400).send(err);
    res.status(201).send(car);
  });
};

// Login for user
exports.login = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) {
      return res.status(500).send(err);
    }

    if (!user) {
      res.status(404).send({
        success: false,
        message: messages.auth_failed
      });
    } else if (user) {
      // check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) {
          return res.status(500).send(err);
        }

        if (isMatch) {
          // create token based on token secret key and user id
          var token = jwt.sign({userId: user.id}, config.TOKEN_SECRET, {
            expiresIn: 7200 // seconds
          });

          // return the information including token as JSON
          res.header('X-Auth-Token', token);
          res.status(200).send({token});
        } else {
          res.status(401).send({
            message: messages.auth_password_incorrect
          });
        }
      });
    }
  });
};

// Refresh current token from the request if it's expired
exports.refreshToken = function(req, res) {
  const userId = req.decoded.userId;

  User.findOne({
    _id: userId
  }, function(err, user) {

    if (err) {
      return res.status(500).send(err);
    }

    if (!user) {
      res.status(404).send({
        message: messages.token_not_valid
      });
    } else if (user) {

      var token = jwt.sign({userId: user.id}, config.TOKEN_SECRET, {
        expiresIn: 7200 // seconds
      });

      // return the information including token as JSON
      res.header('X-Auth-Token', token);
      res.status(200).send();
    }
  });
};

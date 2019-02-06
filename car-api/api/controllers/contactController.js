'use strict';

const axios = require('axios');

// Send emails notifications
exports.getContactInfo = function(req, res) {
  axios.get('http://contact_api:3002/api/contact-info')
    .then(function(response) {
        res.status(200).send(response.data);
    })
    .catch(function(error) {
      res.status(500).send({ code: error.code });
    });
};

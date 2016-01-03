var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('received message POST');
      var data = JSON.parse(JSON.stringify(req.body));
      console.log(data);
      models.messages.post(data.message);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('received users POST');
      var data = JSON.parse(JSON.stringify(req.body));
      console.log(data);
      models.users.post(data.username);
      res.end();
    }
  }
};


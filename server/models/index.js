var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (text) {
      console.log('in models, db will add message');
      db.addMessage(text);

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      console.log('in models, db will add user');
      db.addUser(username);
    }
  }
};


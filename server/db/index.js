var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
});

dbConnection.connect();

module.exports = {

  addUser:function(username){
    console.log('in mysql, db will add user');
    var dbConnection = mysql.createConnection({
          user: "root",
          password: "",
          database: "chat"
    });

    dbConnection.connect();

    dbConnection.query('INSERT INTO users (username) VALUES ("' + username + '")', {}, function(err, result) {
      if(err){
        console.log('it broke');
      }else{
        console.log('user saved?');
      }

    });

  },
  addMessage:function(text){
    console.log('in mysql, db will add message');
    var dbConnection = mysql.createConnection({
          user: "root",
          password: "",
          database: "chat"
    });

    dbConnection.connect();
    dbConnection.query('INSERT INTO messages (text) VALUES ?("' + text + '")', {}, function(err, result) {
      if(err){
        console.log('it broke');
      }else{
        console.log('message saved?');
      }

    });
  }


};
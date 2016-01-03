  DROP DATABASE chat;  /*This line will delete the database every time we run this file */


CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text varchar(255),
  user_id int(11),
  room_id int(11)
);



CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname varchar (255)
);


CREATE TABLE  users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username  varchar (255)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


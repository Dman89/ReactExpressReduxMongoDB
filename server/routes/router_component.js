const express  = require('express');
const passport = require('passport');
module.exports = function(app) {
  app.use("/", express.static('public'));
  app.use("/signin", express.static('public'));
  app.use("/profile", express.static('public'));
  app.use("/signout", express.static('public'));
  app.use("/signup", express.static('public'));
}

const express  = require('express');
module.exports = function(app) {
  app.use("/", express.static('public'));
  app.use("/signin", express.static('public'));
  app.use("/signup", express.static('public'));
  app.use("/signout", express.static('public'));
}

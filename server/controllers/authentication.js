const User = require("../models/user")
const jwt = require('jwt-simple');
const config = require('../config');
const mongoose = require("mongoose");

function tokenForUser(user) {
  const time = new Date().getTime();
  return jwt.encode({ sub: user.email, iat: time }, config.goldcoin)
}

exports.signup = function(req, res, next) {
  // Check for All Variables
  if (!req.body.email || !req.body.password) {
    return res.status(422).send({statusMessage: "Email and Password are Required."})
  }
  const email = req.body.email.toLowerCase(), password = req.body.password;
    // Check Email for a User
  User.findOne({email: email}, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
    // IF Email contains a User, Run Error
      return res.status(422).send({statusMessage: "Email is in use."})
    }
    const user = new User({
      email: email,
      password: password
    });
    User.findById(user._id, function(err, existingUser) {
      if (existingUser) {
      // IF Email contains a User, Run Error
        return res.status(422).send({statusMessage: "ID is in use."})
      }
        // IF User does NOT exist, create and save User
      user.save(function(err) {
        if (err) {
          return next(err);
        }
          //Respond to request indicating the user was created
          console.log("Created User");
        return res.status(200).json({statusMessage: "Success, User Created!", token: tokenForUser(user)});
      })
    })
  })
};

//Logged In: Recieve token
exports.login = function(req, res, next) {
  return res.status(200).send({statusMessage: "Success, User Found!", token: tokenForUser(req.user)});
}

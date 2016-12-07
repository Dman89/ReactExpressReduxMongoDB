const User = require("../models/user")
const jwt = require('jwt-simple');
const config = require('../config');
function tokenForUser(user) {
  const time = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: time }, config.goldcoin)
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
      // IF User does NOT exist, create and save User
    user.save(function(err) {
      if (err) {
        return next(err);
      }
        //Respond to request indicating the user was created
      res.status(200).json({statusMessage: "Success, User Created!", token: tokenForUser(user)});
    })
  })
};

//Logged In: Recieve token
exports.login = function(req, res, next) {
  res.status(200).send({statusMessage: "Success, User Found!", token: tokenForUser(req.user)});
}
// Check for Current Logged In Status

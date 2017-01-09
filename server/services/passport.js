const User = require('../models/user');
const config = require('../config');
const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
//create Local Strategy
const localOptions = { usernameField : "email" };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  //Verify
  User.findOne({email: email.toLowerCase()}, function(err, user) {
  //Incorrect
    if (err) {return done(err);}
    if(!user){return done(null,false)}
  //Correct
    // Compare Passwords
    user.comparePassword(password, function(err, isMatch) {
      if(err){return done(err);}
      if(!isMatch){return done(null, false);}
      return done(null, user);
    })
  })
})
//Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.goldcoin
};
//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  //See if user ID is in DATABASE
  User.findOne({"email": payload.sub}, function(err, user) {
    if (err) {return done(err, false);}
    if (user) {
    //call done with user
      done(null, user);
    }
    else {
    //otherwise call done without user object
      done(null, false)
    }
  })
})
// Tell Passport to use Strategy
passport.use(jwtLogin);
passport.use(localLogin);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define, Create, Export

const UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});
//Before saving a model, run this function {pre()}
UserSchema.pre('save', function(next) {
  // Get access to the user model
  const user = this;
  //Generate a salt, then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {return next(err);}
    // hash encrypt our password with encrypted password
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {return next(err);}
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(checkPassword, callback) {
  bcrypt.compare(checkPassword, this.password, function(err, isMatch) {
    if (err) {return callback(err);}
    callback(null, isMatch);
  });
};

const ModelClass = mongoose.model("user", UserSchema);

module.exports = ModelClass;

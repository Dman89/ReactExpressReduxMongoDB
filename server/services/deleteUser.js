const User = require('../models/user');

function deleteUser(req, res) {
  var email = req.body.email, password = req.body.password
  if (req.body.allow == "true") {
    User.findOne({email: email.toLowerCase()}, function(err, user) {
    //Incorrect
      if (err) {return res.status(500).json({statusMessage: err})}
      if(!user){return res.status(500).json({statusMessage: "Failed to Delete User"})}
    //Correct
      // Compare Passwords
      user.comparePassword(password, function(err, isMatch) {
        if(err){return res.status(500).json({statusMessage: err})}
        if(!isMatch){return res.status(500).json({statusMessage: "Failed to Delete User"})}
        User.remove(user, function(err, result) {
          if(err){return res.status(500).json({statusMessage: err})}
          console.log('Deleted User');
          return res.status(200).json({statusMessage: "Deleted User"})
        })
      })
    })
  } else {
    return res.status(500).json({statusMessage: "Failed to Delete User"})
  }
}

module.exports = deleteUser;

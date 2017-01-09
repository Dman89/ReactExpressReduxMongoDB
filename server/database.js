const mongoose = require('mongoose');
mongoose.connect('mongodb://Overlord:BobRoss420@ds043982.mlab.com:43982/alehub', function(err) {
  if (err) {
    console.log("Error Connecting");
  } else {
    console.log('Connected to MongoDB!')
  }
})

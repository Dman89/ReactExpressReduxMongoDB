const mongoose = require('mongoose');
const nameOfDB = "appName";
const server = process.env.DB || 'mongodb://localhost/'+nameOfDB;
mongoose.connect(server, function(err) {
  if (err) {
    console.log("Error Connecting");
  } else {
    console.log('Connected to MongoDB!')
  }
})

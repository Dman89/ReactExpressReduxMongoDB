const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const deleteUser = require("../services/deleteUser");
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});
module.exports = function(app) {
  app.get('/api/profile', requireAuth, function(req, res) {
    res.status(200).send({user: req.user});
  })
  app.post('/api/signup', Authentication.signup);
  app.post('/api/signin', requireLogin, Authentication.login);



  app.delete('/api/a666Route', deleteUser);



}

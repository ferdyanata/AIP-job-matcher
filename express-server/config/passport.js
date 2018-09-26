var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the TalentModel
var TalentModel = require('../models/talentModel');
var EmployerModel = require('../models/employerModel');
var settings = require('../config/settings'); // get settings file

/**
 * this file is used for getting the user(s) by matching JWTToken with the token we get from the client.
*/

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    TalentModel.findOne({talentId: jwt_payload.id, email: email}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    EmployerModel.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};
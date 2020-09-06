const localStrategy=require('passport-local').Strategy;
const User=require('../models/user');
const bcrypt=require('bcrypt');
module.exports = function(passport) {
  passport.use(
    new localStrategy({ usernameField: 'healthid' }, (healthid, password, done) => {
      // Match user
      User.findOne({
        healthid: healthid
      }).then(user => {
        if (!user) {
          console.log(1);
          return done(null, false, { message: 'That healthid is not registered' });
        }
        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          console.log(password,user.password,isMatch)
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
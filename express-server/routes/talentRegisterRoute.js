const express = require('express');
const passport = require('passport');
require('../config/passport')(passport);
const settings = require('../config/settings');
var jwt = require('jsonwebtoken');
const router = express.Router();
const Talent = require('../models/talentModel.js');

/**
 * display registration form
 */
router.get('/talent-register', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    res.render('HelloMessage');
});

/**
 * get all talents from the database
 */
router.get('/get-talents', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    // res.send("talent register page");
    Talent.find({}, function (err, allTalents) {
        if (err) {
            console.log(err);
        } else {
            res.json(allTalents);
        }
    });
});

router.post('/talent-register', function(req, res){
    const fullName = (req.body.firstName + ' ' + req.body.lastName);
    const email = req.body.email;
    const password = req.body.password;

    // error handler if user did not fill registration form
    if (!fullName || !password || !email) {
        res.json({success: false, msg: 'Please enter your name, email and password.'});
      } else {
        // save user
        var newUser = new Talent({
          fullName: fullName,
          email: email,
          password: password
        });
        // save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({success: false, msg: 'Username already exists.'});
          }
          res.json({success: true, msg: 'Successful created new user.'});
        });
      }
});

// router.post('/talent-register', function (req, res, next) {
//     // Before passport code
//     // const newTalent = new Talent({
//     //     fullName: (req.body.firstName + ' ' + req.body.lastName),
//     //     email: req.body.email,
//     //     password: req.body.password
//     // });

//     const fullName = (req.body.firstName + ' ' + req.body.lastName);
//     const email = req.body.email;
//     const password = req.body.password;
//     const password2 = req.body.password2;

//     req.checkBody('firstName', 'First name is required').notEmpty();
//     req.checkBody('lastName', 'First name is required').notEmpty();
//     req.checkBody('email', 'email is required').notEmpty();
//     req.checkBody('email', 'email is not valid').isEmail(); // check whether it is valid
//     req.checkBody('password', 'Password is required').notEmpty();
//     req.checkBody('password2', 'Password does not match').equals(req.body.password);


//     // newTalent.save().then(function (talent) {
//     //     res.send(talent);
//     // });

//     let errors = req.validationErrors();

//     if (errors) {
//         // Need to create this
//         res.render('registerTalent', {
//             // render the errors onto the page
//             errors: errors
//         });
//     } else {
//         let newTalent = new Talent({
//             fullName: fullName,
//             email: email,
//             password: password,
//         });

//         bcrypt.getSalt(10, function (err, salt) {
//             bcrypt.hash(newTalent.password, salt, function (err, hash) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 newTalent.password = hash;
//                 newTalent.save(function (err) {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     } else {
//                         req.flash('success', 'You have successfully registered!');
//                         // should redirect to the build portfolio page
//                         res.send(newUser);
//                     }
//                 });
//             });
//         });
//     }
// });

// allow other files to import this file
module.exports = router;
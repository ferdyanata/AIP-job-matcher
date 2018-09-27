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
router.get('/talents', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    // res.send("talent register page");
    Talent.find({}, function (err, allTalents) {
        if (err) {
            console.log(err);
        } else {
            // return all talents from database
            res.json(allTalents);
        }
    });
});

router.post('/talent-register', function (req, res) {
    const fullName = (req.body.firstName + ' ' + req.body.lastName);
    const email = req.body.email;
    const password = req.body.password;

    // error handler if user did not fill registration form
    if (!fullName || !password || !email) {
        res.json({ success: false, msg: 'Please enter your name, email and password.' });
    } else {
        // save user onto the database
        var newUser = new Talent({
            fullName: fullName,
            email: email,
            password: password
        });
        // save the user onto the database
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            } else {
                const token = jwt.sign({fullName: fullName, email: email}, settings.secret);
                // return the information including token
                res.json({ newUser, success: true, msg: 'Successful created new user.', token: token });
            }

        });
    }
});

// allow other files to import this file
module.exports = router;
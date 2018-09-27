const express = require('express');
const passport = require('passport');
require('../config/passport')(passport);
const settings = require('../config/settings');
var jwt = require('jsonwebtoken');
const router = express.Router();
const Employer = require('../models/employerModel.js');

/**
 * display registration form
 */
router.get('/employer-register', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    res.send("employer register page");
});

/**
 * get all employers from the database
 */
router.get('/get-employers', function (req, res, next) {
    Employer.find({}, function (err, allEmployers) {
        if (err) {
            console.log(err);
        } else {
            res.json(allEmployers);
        }
    });
});


router.post('/employer-register', function (req, res, next) {
    const companyName = req.body.companyName;
    const email = req.body.email;
    const password =  req.body.password;

    // error handler if user did not fill registration form
    if (!email || !password || !companyName) {
        res.json({ success: false, msg: 'Please enter your company name, email and password.' });
    } else {
        // create new user object
        var newUser = new Employer({
            companyName: companyName,
            email: email,
            password: password
        });
        // save the user onto database
        newUser.save(function (err) {
            if (err) {
                // if err, display Email already exists in the database
                return res.json({ success: false, msg: 'Email already exists.' });
            } else {
                // this will sign the entire information in newUser object 
                const token = jwt.sign({ companyName: companyName, email: email }, settings.secret);
                // return the information including token 
                res.json({ newUser, success: true, msg: 'Successful created new user.', token: token });
            }

        });
    }
});

// allow other files to import this file
module.exports = router;
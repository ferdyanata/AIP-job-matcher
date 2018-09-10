const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

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
    // this needs to be replaced with the jsx registration page
    // res.send("employer register page");
    Employer.find({}, function (err, allEmployers) {
        if (err) {
            console.log(err);
        } else {
            res.json(allEmployers);
        }
    });
});

router.post('/employer-register', function (req, res, next) {
    const newUser = new Employer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName
    });

    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail(); // check whether it is valid
    req.checkBody('phone', 'Phone is required').notEmpty();
    req.checkBody('jobTitle', 'Job title is required').notEmpty();
    req.checkBody('companyName', 'Company name is required').notEmpty();

    newUser.save().then(function (user) {
        res.send(user);
    });
});

// allow other files to import this file
module.exports = router;
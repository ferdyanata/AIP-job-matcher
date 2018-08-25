const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

const router = express.Router();
const Employer = require('../models/employerServerModel.js');

/**
 * display registration form
 */
router.get('/employer-register', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    res.send("employer register page");
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

    newUser.save().then(function (user) {
        res.send(user);
    });
});

// allow other files to import this file
module.exports = router;
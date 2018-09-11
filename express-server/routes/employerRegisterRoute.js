const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

const router = express.Router();
const Employer = require('../models/employerModel.js');

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

/**
 * display registration form
 */
router.get('/employer-register', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    res.send("employer register page");
});

router.post('/employer-register', function (req, res, next) {
    const newEmployer = new Employer({
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password,
        companyName: req.body.companyName
    });

    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail(); // check whether it is valid
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(req.body.password);
    req.checkBody('companyName', 'Company name is required').notEmpty();

    newEmployer.save().then(function (employer) {
        res.send(employer);
    });
});

// allow other files to import this file
module.exports = router;
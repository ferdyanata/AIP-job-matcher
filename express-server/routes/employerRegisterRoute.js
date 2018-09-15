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
        companyName: req.body.companyName
    });


    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail(); // check whether it is valid
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('companyName', 'Company name is required').notEmpty();
    
    newEmployer.save().then(function (employer) {
        res.send(employer);
    });
});

router.post('/employer-login', function (req, res, next) {
    const email = req.body.email;

    Employer.findOne({ email: email })
        .exec(function (err, employer) {
            if (err){
                console.log(err);
            } else if (!employer) {
                //employer with that email was not found
                console.log('email not found');
            } else {
                //compare passwords with bcrypt.compare, if good
                res.send(employer);
            }
        });
});

// allow other files to import this file
module.exports = router;
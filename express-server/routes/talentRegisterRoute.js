const express = require('express');
const router = express.Router();
const Talent = require('../models/talentModel.js');

/**
 * display registration form
 */
router.get('/talent-register', function (req, res, next) {
    // this needs to be replaced with the jsx registration page
    res.send("talent register page");
});

router.post('/talent-register', function (req, res, next) {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('fullName', 'First name and last name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'email is not valid').isEmail(); // check whether it is valid
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if (errors) {
        // Need to create this
        res.render('RegisterTalent', {
            // render the errors onto the page
            errors: errors
        });
    } else {
        let newUser = new Talent({
            fullName: fullName,
            email: email,
            password: password,
            password2: password2
        });

        bcrypt.getSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) {
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save(function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        req.flash('success', 'You have successfully registered!');
                        // should redirect to the build portfolio page
                        res.redirect('/')
                    }
                });
            });
        });
    }
});

// allow other files to import this file
module.exports = router;
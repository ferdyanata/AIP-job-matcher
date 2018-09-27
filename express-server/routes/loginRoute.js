const express = require('express');
const passport = require('passport');
require('../config/passport')(passport);
const settings = require('../config/settings');
var jwt = require('jsonwebtoken');
const router = express.Router();
const Talent = require('../models/talentModel.js');
const Employer = require('../models/employerModel');

router.post('/employer-login', function (req, res) {
    const email = req.body.email;

    Employer.findOne({
        email: email
    }, function (err, employer) {
        if (err) throw err;

        if (!employer) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            employer.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if talent is found and password is right create a token
                    // this is public information, so only sign in with id and email
                    req.login(employer, { session: false }, (err) => {
                        if (err) {
                            res.send(err);
                        } else {
                            const token = jwt.sign({ email: email }, settings.secret);
                            // return the information including token as JSON
                            res.json({ employer, success: true, msg: 'Successfully logged in!', token: token });
                        }
                    });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});


router.post('/talent-login', function (req, res) {
    const email = req.body.email;

    Talent.findOne({
        email: email
    }, function (err, talent) {
        if (err) throw err;

        if (!talent) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            talent.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if talent is found and password is right create a token
                    // this is public information, so only sign in with id and email
                    req.login(talent, { session: false }, (err) => {
                        if (err) {
                            res.send(err);
                        } else {
                            const token = jwt.sign({ talentId: talent._id, email: email }, settings.secret);
                            // return the information including token as JSON
                            res.json({ talent, success: true, token: token });
                        }
                    });

                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

module.exports = router;
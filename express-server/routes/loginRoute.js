const express = require('express');
const passport = require('passport');
require('../config/passport')(passport);
const settings = require('../config/settings');
var jwt = require('jsonwebtoken');
const router = express.Router();
const Talent = require('../models/talentModel.js');
const Employer = require('../models/employerModel');

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
                        }
                        
                        const token = jwt.sign({ talentId: talent._id, email: email }, settings.secret);
                        // return the information including token as JSON
                        res.json({ talent, success: true, token: token });
                    });

                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });


});

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
                    const token = jwt.sign(talent.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


module.exports = router;
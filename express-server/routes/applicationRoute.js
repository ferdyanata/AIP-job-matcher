const express = require('express');
const router = express.Router();
const Application = require('../models/applicationModel');
const Talent = require('../models/talentModel');

// fetches all applicants who have applied to the position
router.get('/applications', function (req, res, next) {
    Application.find({}, function (err, allApplications) {
        if (err) {
            console.log(err);
        } else {
            res.json(allApplications);
        }
    });
});

router.get('/applications/:positionId', function (req, res, next) {
    var positionId = req.params.positionId;

    Application.find({positionId: positionId}, function (err, applications) {
        if (err) {
            console.log(err);
        } else {
            res.json(applications);
        }
    });
});

router.post('/application', function (req, res, next) {
    var applicationToSubmit = new Application({
        talentName: req.body.fullName,
        messageToEmployer: req.body.messageToEmployer,
        talentId: req.body.talentId,
        positionId: req.body.positionId,
    });

    // error checking to ensure field is not empty in the client
    req.checkBody('messageToEmployer', 'Message is required').notEmpty();

    applicationToSubmit.save().then(function (application) {
        res.send(application);
    });
});

router.get('/application/:talentId/:positionId', function (req, res, next) {
    var talentId = req.params.talentId;
    var positionId = req.params.positionId;
    
    Application.findOne({ talentId: talentId, positionId: positionId}, function (err, application) {
        if (err) {
            console.log(err);
        } else {
            res.json(application);
        }
    });
});


router.get('/talent/:talentId', function (req, res, next) {
    var talentId = req.params.talentId;

    Talent.findOne({_id: talentId}, function(err, talent) {
        if (err) {
            console.log(err);
        } else {
            res.json(talent);
        }
    });
})

module.exports = router;
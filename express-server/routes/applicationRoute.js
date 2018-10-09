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

router.post('/application', function (req, res, next) {
    var applicationToSubmit = new Application({
        talentName: req.body.fullName,
        messageToEmployer: req.body.messageToEmployer,
        talentId: req.body.talentId,
        positionId: req.body.positionId,
        // applicationDate: req.body.applicationDate
    });

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


// //Ignore all this stuff
// router.get('/applicants-info/:applicationId', function (req, res, next) {
//     var applicationId = req.params.applicationId;

//     Application.aggregate([
//        {
//            $lookup: {
//                from: "talents",
//                localField: "talentId",
//                foreignField: "_id",
//                as: "applicantsInfo"
//            }
//        } 
//     ]).exec(function(err, results) {
//         res.send(results)
//         console.log(results);
//     });


// });


module.exports = router;
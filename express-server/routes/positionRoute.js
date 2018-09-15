const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

const router = express.Router();
const Position = require('../models/positionModel.js');

/**
 * get all positions from the database
 * Useful for displaying available positions to talent
 */
router.get('/get-positions', function (req, res, next) {
    Position.find({}, function (err, allPositions) {
        if (err) {
            console.log(err);
        } else {
            res.json(allPositions);
        }
    });
});

/**
 * Get positions by its Id
 * Useful for JobInfo
 */
router.get('/get-positon/:positionId', function (req, res, next) {
    var positionId = req.params.positionId;
    Position.findOne({positionId: positionId}, function(err, position) {
        if (err) {
            console.log(err);
        } else {
            res.json(position);
        }
    });
})

/**
 * Get positions advertised by a specific employer from database
 * Useful for when displaying employers advertised positions
 */
router.get('/get-positions/:employerId', function (req, res, next) {
    var employerId = req.params.employerId;
    Position.find({employerId: employerId}, function(err, positions) {
        if (err) {
            console.log(err);
        } else {
            res.json(positions);
        }
    });
});

router.post('/add-position', function (req, res, next) {
    var positionToAdd = new Position({
        positionName: req.body.positionName,
        description: req.body.description,

        // //Need to figure this one out.
        // desiredSkills: [{
        //     skillName: req.body.skillName,
        //     skillLevel: req.body.skillLevel
        // }],

        // creationDate: req.body.creationDate,
        // closingDate: req.body.closingDate,
        employerId: req.body.employerId
    });

    req.checkBody('positionName', 'Name is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();
    // req.checkBody('closingDate', 'Closing date is required').notEmpty();

    positionToAdd.save().then(function (position) {
        res.send(position);
    });
});

module.exports = router;
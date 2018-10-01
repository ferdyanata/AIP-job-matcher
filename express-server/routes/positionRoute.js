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
router.get('/positions', function (req, res, next) {
    Position.find({}, function (err, allPositions) {
        if (err) {
            console.log(err);
        } else {
            res.json(allPositions);
        }
    });
});

/**
 * Get position by its Id
 */
router.get('/positions/:positionId', function (req, res, next) {
    var positionId = req.params.positionId;
    console.log("getting position by id "+ positionId);
    Position.findOne({_id: positionId}, function(err, position) {
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
router.get('/employer_positions/:employerId', function (req, res, next) {
    var employerId = req.params.employerId;
    Position.find({employerId: employerId}, function(err, positions) {
        if (err) {
            console.log(err);
        } else {
            res.json(positions);
        }
    });
});

router.post('/position', function (req, res, next) {
    var positionToAdd = new Position({
        positionName: req.body.positionName,
        description: req.body.description,
        desiredSkills: req.body.desiredSkills,
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
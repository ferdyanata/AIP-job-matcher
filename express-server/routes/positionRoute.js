const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

const router = express.Router();
const Position = require('../models/positionModel.js');
const Employer = require('../models/employerModel.js');

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

router.get('/employer/:employerId', function (req, res, next) {
    var employerId = req.params.employerId;
    Employer.findOne({_id: employerId}, function(err, employer) {
        if (err) {
            console.log(err);
        } else {
            res.json(employer);
        }
    });
});

router.post('/position', function (req, res, next) {
    var positionToAdd = new Position({
        positionName: req.body.positionName,
        description: req.body.description,
        desiredSkills: req.body.desiredSkills,
        employerId: req.body.employerId
    });

    req.checkBody('positionName', 'Name is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();

    positionToAdd.save().then(function (position) {
        res.send(position);
    });
});

/**
 * Edits a job listing ad based from position id
 */
router.put('/edit-position/:positionId', function(req, res, next){
    var positionId = req.params.positionId;

    req.checkBody('positionName', 'Name is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();

    Position.findByIdAndUpdate(positionId, req.body, function(err, updatedPosition){
        if (err) {
            console.log(err);
        } else {
            res.json(updatedPosition);
        }
    })
});

router.delete('/delete-position/:positionId', function(req, res, next){
    var positionId = req.params.positionId;
    Position.findByIdAndRemove(positionId, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send('Position Deleted');
        }
    })
});

module.exports = router;
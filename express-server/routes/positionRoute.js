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
 * Get positions advertised by a specific employer from database
 * Useful for when displaying employers advertised positions
 */
router.get('/positions/:employerCompanyName', function (req, res, next) {
    var employerCompanyName = req.params.employerCompanyName;
    //Assuming that the attribute employerCompanyName(FK) exists in positionModel.
    Position.find({employerCompanyName: employerCompanyName}, function(err, positions) {
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

        //Need to figure this one out.
        desiredSkills: [{
            skillName: req.body.skillName,
            skillLevel: req.body.skillLevel
        }],

        creationDate: req.body.creationDate,
        closingDate: req.body.closingDate
    });

    req.checkBody('positionName', 'Name is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();
    req.checkBody('closingDate', 'Closing date is required').notEmpty();

    positionToAdd.save().then(function (user) {
        res.send(positionToAdd);
    });
});

module.exports = router;
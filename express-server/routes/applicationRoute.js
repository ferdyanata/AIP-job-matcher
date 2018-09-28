const express = require('express');
const router = express.Router();
const Application = require('../models/applicationModel');

router.post('/application', function (req, res, next) {
    var applicationToSubmit = new Application({
        messageToEmployer: req.body.messageToEmployer,

        // talentId: req.body.talentId,
        positionId: req.body.positionId,
        // applicationDate: req.body.applicationDate
    });

    req.checkBody('messageToEmployer', 'Meesage is required').notEmpty();

    applicationToSubmit.save().then(function (application) {
        res.send(application);
    });
});

module.exports = router;
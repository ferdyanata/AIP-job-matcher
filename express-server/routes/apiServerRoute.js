const express = require('express');

/**
 * creating an express.router() allows us to access its HTTP methods. 
 * (GET, POST, PUT and DELETE)
 */

const router = express.Router();

//  const Employee = require('../models/employee.js');
//  const Employer = require('../models/employer.js');

 router.get('/jobs', function(req, res, next){
    res.send('get router from jobs works');
 });

// allow other files to import this file
module.exports = router;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Assist with MongoDB connection
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Api is working');
});

/**
 * connect to mongodb MLab
 */
//const db = require('./config/keys').mongoURI;

mongoose
    //.connect(db, { useNewUrlParser: true })
    .connect('mongodb://localhost/job_seeker', { useNewUrlParser: true })
    .then(function () { console.log('MongoDB Connected...') })
    .catch(function (err) { console.log(err) });

/**
 * serves as a middleware that provides static pages/information such as jpeg
 * as a result, it doesn't need to run the api functions
 */
//app.use(express.static('public'));

/**
 * Helps handle HTTP POST request to complement Express.js (V4 and above)
 * body-parser extracts the entire body portion of an incoming request 
 * stream and exposes it on req.body
 */
app.use(bodyParser.json());

/**
 * initialize routes created in 'routes' folder
 */
app.use('/api', require('./routes/employerRegisterRoute')),
app.use('/api', require('./routes/devRoute'));

app.listen(port, function () {
    // Passing backtick/template strings in the method argument so we can embed expressions ${port}
    console.log(`Listening on port ${port}...`)
});
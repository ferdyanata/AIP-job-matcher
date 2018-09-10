const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Assist with MongoDB connection
const port = process.env.PORT || 4000;
const path = require('path'); // included module with NodeJs
const employerRegisterRoute = require('./routes/employerRegisterRoute'),
    talentRegisterRoute = require('./routes/talentRegisterRoute'),
    positionRoute = require('./routes/positionRoute');
const expressValidator = require('express-validator');

// validates checkBody in route pages.
app.use(expressValidator());

app.use(bodyParser.urlencoded({ extended: true }));

// load view engine
app.set('../react-client/src/components/', path.join(__dirname, '../react-client/src/components/'));
app.set('view engine', 'js');

app.get('/', function (req, res) {
    res.send('Api working');
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
 * route files
 */
app.use('/api', employerRegisterRoute),
    app.use('/api', talentRegisterRoute),
    // app.use('/api', positionRoute);


    /**
     * set port for the host to listen to
     */
    app.listen(port, function () {
        // Passing backtick/template strings in the method argument so we can embed expressions ${port}
        console.log(`Listening on port ${port}...`)
    });
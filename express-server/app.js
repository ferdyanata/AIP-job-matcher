const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Assist with MongoDB connection
const port = process.env.PORT || 4000;
const logger = require('morgan');
const passport = require('passport');
const path = require('path'); // included module with NodeJs
const expressValidator = require('express-validator'); // uses checkBody function to validate fields
const employerRegisterRoute = require('./routes/employerRegisterRoute'),
    talentRegisterRoute = require('./routes/talentRegisterRoute'),
    loginRoute = require('./routes/loginRoute'),
    positionRoute = require('./routes/positionRoute'),
    applicationRoute = require('./routes/applicationRoute');

// validates checkBody in route pages.
app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev')); // morgan logger

// load view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.get('/', function (req, res) {
    res.send('Api working');
});

/**
 * connect to mongodb MLab
 */
mongoose.Promise = require('bluebird'); // A Promise library 
mongoose
    .connect('mongodb://localhost/job_seeker', { useNewUrlParser: true })
    .then(function () { console.log('MongoDB Connected...') })
    .catch(function (err) { console.log(err) });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/**
 * Helps handle HTTP POST request to complement Express.js (V4 and above)
 * body-parser extracts the entire body portion of an incoming request 
 * stream and exposes it on req.body
 */
app.use(bodyParser.json());

/**
 * route files
 */
app.use('/api', positionRoute);
passport.authenticate('jwt', {session: false}, positionRoute);

app.use('/api', employerRegisterRoute);
passport.authenticate('jwt', {session: false}, employerRegisterRoute);

app.use('/api', talentRegisterRoute);
passport.authenticate('jwt', {session: false}, talentRegisterRoute);

app.use('/api', loginRoute);
passport.authenticate('jwt', { session: false}, loginRoute);

app.use('/api', applicationRoute);


/**
 * set port for the host to listen to
 */
app.listen(port, function () {
    // Passing backtick/template strings in the method argument so we can embed expressions ${port}
    console.log(`Listening on port ${port}...`)
});
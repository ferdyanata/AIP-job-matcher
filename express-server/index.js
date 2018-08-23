const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
    res.send('Api is working');
});

/**
 * initialize routes created in 'routes' folder
 */
app.use('/api', require('./routes/api.server.route'));

app.listen(port, function(){
    // Passing backtick/template strings in the method argument so we can embed expressions ${port}
    console.log(`Listening on port ${port}...`)
});
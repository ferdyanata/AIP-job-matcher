const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/api')

app.listen(port, function(){
    // Passing backtick/template strings in the method argument so we can embed expressions ${port}
    console.log(`Listening on port ${port}...`)
});
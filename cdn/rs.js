// import expressjs
var express = require('express');
var app = express();
// Host static files
app.use(express.static('static'));
// Listen on port 3000
app.post('/api/lp', function (req, res) {
    console.log('Received POST request');
    console.log(req.body);
})
app.post('/api/pp', function (req, res) {
    console.log('Received POST request');
    console.log(req.body);
})
app.listen(3000, function () {
    console.log('Listening on port 3000');
})
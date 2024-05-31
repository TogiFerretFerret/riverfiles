// import expressjs
var express = require('express');
var app = express();
// Host static files
app.use(express.static('static'));
// Listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
})
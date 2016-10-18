var https = require('https');

var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

var connect = require('connect');

// Create a connect dispatcher
var app = connect();

// Register with https
https.createServer(options, app)
    .listen(3000);
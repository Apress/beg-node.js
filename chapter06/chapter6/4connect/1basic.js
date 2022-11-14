var connect = require('connect')
    , http = require('http');

// Create a connect dispatcher
var app = connect();

// Register with http
http.createServer(app)
    .listen(3000);
console.log('server running on port 3000');
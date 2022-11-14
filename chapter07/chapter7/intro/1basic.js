var express = require('express')
    , http = require('http');

// Create an express application
var app = express()
            // register a middleware
            .use(function (req, res, next) {
                res.end('hello express!');
            });

// Register with http
http.createServer(app)
    .listen(3000);
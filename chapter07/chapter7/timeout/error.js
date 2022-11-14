var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use('/api', timeout(5000)
               , function (req, res, next) {
                   // simulate a hanging request by doing nothing
               }
               , function (error, req, res, next) {
                   if (req.timedout) {
                       res.statusCode = 500;
                       res.end('Request timed out');
                   }
                   else {
                       next(error);
                   }
               })
    .listen(3000);

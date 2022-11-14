var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use(timeout(1000))
    .use(function (req, res, next) {
        // simulate database action that takes 2s
        setTimeout(function () {
            next();
        }, 2000)
    })
    .use(haltOnTimedout)
    .use(function (req, res, next) {
        res.end('Done'); // Will never get called
    })
    .listen(3000);


function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}
var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use(timeout(5000))
    .use(function (req, res, next) {
        // simulate database action that takes 6s
        setTimeout(function () {
            next();
        }, 6000)
    })
    .use(function (req, res, next) {
        res.end('Done'); // ERROR request already terminated
    })
    .listen(3000);

var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use('/api', timeout(5000),
                function (req, res, next) {
                    // simulate a hanging request by doing nothing
                })
    .listen(3000);

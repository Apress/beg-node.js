var express = require('express');
var bodyParser = require('body-parser');

var app = express()
    .use(bodyParser())
    .use(function (req, res) {
        if (req.body.foo) {
            res.end('Body parsed! Value of foo: ' + req.body.foo);
        }
        else {
            res.end('Body does not have foo!');
        }
    })
    .use(function (err, req, res, next) {
        res.end('Invalid body!');
    })
    .listen(3000);
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use('/toggle', function (req, res) {
        if (req.cookies.name) {
            res.clearCookie('name');
            res.end('name cookie cleared! Was:' + req.cookies.name);
        }
        else {
            res.cookie('name', 'foo');
            res.end('name cookie set!');
        }
    })
    .listen(3000);

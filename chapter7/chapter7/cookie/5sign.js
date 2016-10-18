var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser('my super secret sign key'))
    .use('/toggle', function (req, res) {
        if (req.signedCookies.name) {
            res.clearCookie('name');
            res.end('name cookie cleared! Was:' + req.signedCookies.name);
        }
        else {
            res.cookie('name', 'foo', { signed: true });
            res.end('name cookie set!');
        }
    })
    .listen(3000);

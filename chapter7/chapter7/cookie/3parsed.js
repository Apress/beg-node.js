var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use(function (req, res) {
        if (req.cookies.name) {
            console.log('User name:', req.cookies.name);
        }
        else {
            res.cookie('name', 'foo');
        }
        res.end('Hello!');
    })
    .listen(3000);
